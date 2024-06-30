import { Request, Response, NextFunction } from 'express';
import { updateUser, fetchUser, fetchAllUsers } from '../repository/userCollection';
import { ApiError } from '../entities/ApiError';

const updateUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, data } = req.body;
    console.log(userId, data);
    await updateUser(userId, { data });
    res.status(200).json({ message: 'User data updated successfully' });
  } catch (error) {
    console.log(error);
    next(new ApiError(400, 'Failed to update user data'));
  }
};

const fetchUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const user = await fetchUser(userId);
    if (!user) {
      return next(new ApiError(404, 'User not found'));
    }
    res.status(200).json(user);
  } catch (error) {
    next(new ApiError(400, 'Failed to fetch user data'));
  }
};

const fetchAllUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await fetchAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(new ApiError(400, 'Failed to fetch users data'));
  }
}

export { updateUserData, fetchUserData, fetchAllUserData };
