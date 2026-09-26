import { Router } from 'express';
import multer from 'multer';
import createHttpError from 'http-errors';
import { authenticate } from '../middleware/authenticate.js';
import { upload } from '../middleware/multer.js';
import { updateUserAvatar } from '../controllers/userController.js';

const router = Router();

const uploadAvatar = (req, res, next) => {
  upload.single('avatar')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return next(createHttpError(400, err.message));
    }
    if (err) {
      return next(err);
    }
    next();
  });
};

router.patch(
  '/users/me/avatar',
  authenticate,
  uploadAvatar,
  updateUserAvatar,
);

export default router;
