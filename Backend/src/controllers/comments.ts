import { Response } from 'express';
import { createNewComment, fetchCommentsByVideoId } from '../services/comments';
import { errorResponse } from '../utils/customResponses';
import { CustomErrors } from '../types/utils';
import { CommentReq } from '../types/controllers';

export const getComments = async (
  req: CommentReq,
  res: Response
): Promise<void> => {
  try {
    const { videoID } = req.params;
    const comments = await fetchCommentsByVideoId(videoID);
    res.status(200).json({ status: 'Success', data: comments });
  } catch (err) {
    errorResponse(err as CustomErrors, res);
  }
};

export const submitComment = async (
  req: CommentReq,
  res: Response
): Promise<void> => {
  try {
    const { videoID } = req.params;
    const { username, comment } = req.body;
    const requiredAttributes = {
      videoID,
      username,
      comment
    };
    await createNewComment({ ...requiredAttributes });
    res.status(201).json({ status: 'Success' });
  } catch (err) {
    errorResponse(err as CustomErrors, res);
  }
};
