import { createRecipient, getAllRecipients } from '../controller/recipient.controller';
import { Router } from 'express';
import { getAllAccounts } from '../controller/account.controller';
import { getTransferHistory, transfer } from '../controller/transfer.controller';
import { verifyToken } from '../middleware/validateToken';

const router: Router = Router();

router.post('/recipient/create', verifyToken, createRecipient);
router.get('/recipients', verifyToken, getAllRecipients);

router.get('/accounts', verifyToken, getAllAccounts);

router.post('/transfer', verifyToken, transfer);
router.post('/transfer-history', verifyToken, getTransferHistory);

export default router;