import express from 'express';
import { getInterviewExp, createInterviewExp } from '../controllers/interview.js';

const router = express.Router()

router.get('/', getInterviewExp)

router.post('/create', createInterviewExp)

export default router;