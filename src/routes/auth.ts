import { Router } from 'express';
import { verifyToken } from '../middleware/validateToken';
import { signUp, signIn, profile } from '../controller/auth.controller';

const router: Router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/profile', verifyToken, profile);

export default router;