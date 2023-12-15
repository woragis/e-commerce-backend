import { Request, Response } from 'express';
import UserModel from '../models/UserModel';
import { hash, compare } from 'bcrypt';

const register = async (req: Request, res: Response) => {
  const { name, username, email, password, admin } = req.body;
  try {
    const usernameTaken = await UserModel.findOne({ username });
    const emailTaken = await UserModel.findOne({ email });
    if (usernameTaken) res.status(400).json({ message: 'username already taken' });
    else if (emailTaken) res.status(400).json({ message: 'email already taken' });
    else {
      const encryptedPassword = await hash(password, 12);
      const newUser = new UserModel({
        name,
        username,
        email,
        password: encryptedPassword,
        admin,
      });
      newUser
        .save()
        .then(savedUser => {
          // req.session.user = { _id: savedUser._id, admin: savedUser.admin };
          console.log(savedUser);
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
  try {
    const user = await UserModel.findOne({ email });
    if (!user) res.status(400).json({ message: "email doens't exist" });
    else {
      compare(password, user.password, (err, same) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'error logging in user ' + err.message });
        } else if (same) {
          // req.session.user = { _id: user._id, admin: true };
          console.log(user);
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
  if (req.session) {
    req.session.destroy((err: Error) => {
      console.error(err);
      res.status(500).json({ message: 'error loging out ' + err.message });
    });
    res.status(200).json({ message: 'logged out' });
  } else res.status(400).json({ message: 'already logged out' });
};

export { register, login, logout };
