import { createRecipient, getAllRecipients } from '../controller/recipient.controller';
import { Router } from 'express';
import { getAllAccounts } from '../controller/account.controller';
import { getTransferHistory, transfer } from '../controller/transfer.controller';

const router: Router = Router();

router.post('/recipient/create', createRecipient);
router.get('/recipients', getAllRecipients);

router.get('/accounts', getAllAccounts);

router.post('/transfer', transfer);
router.post('/transfer-history', getTransferHistory);

export default router;