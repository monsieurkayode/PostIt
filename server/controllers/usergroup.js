/**
 * Import Module dependencies
 */
import db from '../models/index';

const UserGroup = db.Usergroup;

const addToGroup = {
  addGroupUser(req, res) {
    return UserGroup
      .create({
        userId: req.body.userId,
        groupId: req.params.groupId,
      })
      .then(usergroup => res.status(201)
        .json({ message: `Succesfully added ${req.body.userId}`, usergroup }))
      .catch(error => res.status(400).json(error));
  },
};

export default addToGroup;
