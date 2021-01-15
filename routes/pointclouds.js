module.exports = (db) => {
    const express = require('express');
    const router = express.Router();
    const annotationCollection = db.collection('annotations');

    /* GET all annotation groups for a pointcloud */
    router.get('/:name', async (req, res, next) => {
       res.send(await annotationCollection.find({name: req.params.name}).toArray());
    });

    /* POST new annotations in pointcloud */
    router.post('/', async (req, res) => {
        const newAnnotation = await annotationCollection.insertOne(req.body);
        res.status(200).json(newAnnotation);

    });

    /* PUT (update) annotations */
    router.put('/', async (req, res) => {
        const updatedAnnotation = await annotationCollection.replaceOne({name: req.body.name, group_name: req.body.group_name}, req.body);
        res.status(200).json(updatedAnnotation);
    });

    return router;
}

