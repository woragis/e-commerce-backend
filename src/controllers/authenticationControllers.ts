import { Request, Response } from 'express';
import UserModel from '../models/UserModel';
import { hash, compare } from 'bcrypt';

const register = async (req: Request, res: Response) => {
  const { name, username, email, password } = req.body;
  const sess = req.session;
  if (sess) res.status(400).json({ message: 'already logged in' });
  try {
    if (await UserModel.find({ username })) res.status(400).json({ message: 'username already taken' });
    else if (await UserModel.find({ email })) res.status(400).json({ message: 'email already taken' });
    else {
      const encryptedPassword = await hash(password, 12);
      const newUser = new UserModel({
        name,
        username,
        email,
        password: encryptedPassword,
      });
      newUser
        .save()
        .then(savedUser => {
          sess.user = { userId: savedUser._id, admin: savedUser.admin };
          res.status(201).json({ user: savedUser });
        })
        .catch((error: Error) => {
          console.error('Error creating new user' + error);
          res.status(500).json({ message: 'Error creating new user' + error.message });
        });
    }
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: 'error creating user ' + error.message });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const sess = req.session;
  if (sess) res.status(400).json({ message: 'already logged in' });
  try {
    const user = await UserModel.findOne({ email });
    if (!user) res.status(400).json({ message: "email doens't exist" });
    else {
      compare(password, user.password, (err, same) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'error logging in user ' + err.message });
        } else if (same) {
          sess.user = {
            userId: user._id,
            admin: user.admin,
          };
          res.status(200).json({ message: 'logged in' });
        } else res.status(400).json({ message: 'wrong password' });
      });
    }
  } catch (error: any) {
    console.error('error logging in' + error);
    res.status(500).json({ message: 'error logging in ' + error.message });
  }
};

const logout = async (req: Request, res: Response) => {
  const sess = req.session;
  if (sess.user) {
    sess.destroy((err: Error) => {
      console.error(err);
      res.status(500).json({ message: 'error loging out ' + err.message });
    });
  } else res.status(400).json({ message: 'already logged out' });
};

export { register, login, logout };
