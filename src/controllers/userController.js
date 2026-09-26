import createHttpError from 'http-errors';
import { User } from '../models/user.js';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';

export const updateUserAvatar = async (req, res, next) => {
  try {
    if (!req.file) {
      throw createHttpError(400, 'No file');
    }

    const { _id: userId } = req.user;

    const result = await saveFileToCloudinary(req.file.buffer, userId);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { avatar: result.secure_url },
      { returnDocument: 'after' },
    );

    res.status(200).json({ url: updatedUser.avatar });
  } catch (error) {
    next(error);
  }
};
