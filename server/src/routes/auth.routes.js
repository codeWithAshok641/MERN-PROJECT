import { Router } from 'express';
import { register, login, me } from '../controllers/auth.controller.js';
import { registerRules, loginRules } from '../utils/validators.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// POST /api/auth/register
router.post('/register', registerRules, register);

// POST /api/auth/login
router.post('/login', loginRules, login);

// GET /api/auth/me
router.get('/me', requireAuth, me);

export default router;
