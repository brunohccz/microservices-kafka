import express from 'express';
import { CompressionTypes } from 'kafkajs';

const routes = express.Router();

routes.post('/certifications', async (req, res) => {

    const message = {
        user: { id: 1, name: 'bruno' },
        course: 'Kafka com node.js',
        grade: 10
    };

    await req.producer.send({
        topic: 'issue-certificate',
        compression: CompressionTypes.GZIP,
        messages: [
            { value: JSON.stringify(message) }
        ]
    });

    return res.json({ok:true});
});

export default routes;
