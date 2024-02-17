import express from 'express';
import { getProject } from '../controllers/ProjectController.js';
const router = express.Router();


router.route('/').get(getProject);


export default router;