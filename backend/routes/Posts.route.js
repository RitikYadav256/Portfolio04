import express from 'express';
import multer from 'multer';
import AddPost from '../controller/AddPost.controller.js';
import GetPost from '../controller/GetPost.controller.js';
import AddComment from '../controller/AddComment.controller.js';

const route = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

route.post('/Post', upload.single('image'), AddPost);
route.get('/Post', GetPost);
route.post('/Post/Comment', AddComment);
export default route;
