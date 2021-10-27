import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import './config/database';

function initServer() {
    app.listen(app.get('port'));
    console.log('Server on port ', app.get('port'));
}

initServer();