import { Router } from 'express';
import { getUsers } from '../controllers/userController.js';

const router = Router();

// Rutas de usuarios
router.get('/', getUsers);

export default router;
