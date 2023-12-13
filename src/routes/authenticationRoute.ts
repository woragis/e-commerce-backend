import { Router } from 'express';
import { register, login, logout } from '../controllers/authenticationControllers';

const authenticationRoute = Router();

authenticationRoute.route('/register').post(register);
authenticationRoute.route('/login').post(login);
authenticationRoute.route('/logout').post(logout);

export default authenticationRoute;
