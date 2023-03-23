import express from 'express';
import { getCompanies, createCompany, getCompany, getInterviewExp, getInterviews, createInterviewExp } from '../controllers/company.js';

const router = express.Router()

router.get('/', getCompanies)

router.get('/:id', getCompany)

router.post('/create', createCompany)

router.get('/:id/interviews', getInterviews)

router.get('/:id/interviews/:iid', getInterviewExp)

router.post('/:id/createInterviewExperience', createInterviewExp)

export default router;