import express from 'express';
import { getInfo } from '../controllers/InfoController.js';
const router = express.Router();


router.route('/').get(getInfo);


export default router;