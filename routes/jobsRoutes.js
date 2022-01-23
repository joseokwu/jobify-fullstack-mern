import express from 'express';
const router = express.Router();
import {
  createJob,
  getAllJobs,
  showStats,
  updateJob,
  deleteJob,
} from '../controllers/jobsController.js';

router.route('/').post(createJob).get(getAllJobs);
router.route('/stats').get(showStats);
router.route('/:id').patch(updateJob).delete(deleteJob);

export default router;
