import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import taskRoutes from './routes/tasks.js';

dotenv.config();

const server = express();

server.use(bodyParser.json());

server.use('/tasks', taskRoutes);


// GET /labels - returns list of all the labels
// POST /labels - create a new label. {"title": "foo", "color": "#ff0000"}
// PUT /labels/{id} - update the label {"title": "foo", "color": "#ff0000"}
// DELETE /labels/{id} - deletes a label

mongoose.connect(
    process.env.MONGOOSE_CONNECTION_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (err) {
            console.log(`Could not connect to the database:`, err);
            return;
        }
        console.log('Database is up and running');
    });

server.listen(process.env.PORT, () => {
    console.log(`Server is up and running on port ${process.env.PORT}`);
});

