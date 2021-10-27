import { createRecipient, getAllRecipients } from '../controller/recipient.controller';
import { Router } from 'express';

const router: Router = Router();

router.post('/recipient/create', createRecipient);
router.get('/recipients', getAllRecipients);

export default router;