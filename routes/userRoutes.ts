import { Router } from 'express';
import { updateUserData, fetchUserData, fetchAllUserData } from '../controller/api';

const router = Router();

router.post('/update-user-data', updateUserData);
router.get('/fetch-user-data/:userId', fetchUserData);
router.get('/fetch-all-users', fetchAllUserData);

export default router;
