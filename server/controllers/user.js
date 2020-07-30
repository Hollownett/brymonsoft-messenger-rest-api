//utils
import makeValidation from "@withvoid/make-validation";
// models
import UserModel, { USER_TYPES } from "../models/User.js";
import { response } from "express";

export default {
  onGetAllUsers: async (req, res) => {
    try {
      const users = await UserModel.getUsers();
      return res.status(200).json({ success: true, users });
    } catch (error) {
      return res.status(500).json({ success: false, error: error });
    }
  },
  onGetUserByOption: async (req, res) => {
    try {
      const serchOptions = {
        id: req.query.id,
        phoneNumber: req.query.phoneNumber,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        fullName: req.query.fullName,
      };
      if (serchOptions.id) {
        const user = await UserModel.getUserById(serchOptions.id);
        return res.status(200).json({ success: true, user });
      }
      if (serchOptions.phoneNumber) {
        const user = await UserModel.getUserByPhoneNumber(
          serchOptions.phoneNumber
        );
        return res.status(200).json({ success: true, user });
      }
      if (serchOptions.firstName) {
        const user = await UserModel.getUserByFirstName(serchOptions.firstName);
        return res.status(200).json({ success: true, user });
      }
      if (serchOptions.lastName) {
        const user = await UserModel.getUserByLastName(serchOptions.lastName);
        return res.status(200).json({ success: true, user });
      }
      if (serchOptions.fullName) {
        console.log(serchOptions.fullName);
        const user = await UserModel.getUserByFullName(serchOptions.fullName);
        return res.status(200).json({ success: true, user });
      } else {
        return res.status(400).json({ message: "provide search options" });
      }
    } catch (error) {
      return res.status(500).json({ success: false, error: error });
    }
  },
  onGetUserByImageUrl: async (req, res) => {
    try {
      const user = await UserModel.getUserByImageUrl(req.params.imageUrl);
      return res.status(200).json({ success: true, user });
    } catch (error) {
      return res.status(500).json({ success: false, error: error });
    }
  },
  onGetUserByPhoneNumber: async (req, res) => {
    try {
      const user = await UserModel.getUserByPhoneNumber(req.params.phoneNumber);
      return res.status(200).json({ success: true, user });
    } catch (error) {
      return res.status(500).json({ success: false, error: error });
    }
  },
  onCreateUser: async (req, res) => {
    try {
      const validation = makeValidation((types) => ({
        payload: req.body,
        checks: {
          firstName: { type: types.string },
          lastName: { type: types.string },
          phoneNumber: { type: types.string },
          profileImage: { type: types.string },
          type: { type: types.enum, options: { enum: USER_TYPES } },
        },
      }));
      if (!validation.success) retur.res.status(400).json(validation);
      const { firstName, lastName, phoneNumber, profileImage, type } = req.body;
      const user = await UserModel.createUser(
        firstName,
        lastName,
        phoneNumber,
        profileImage,
        type
      );
      return res.status(200).json({ success: true, user });
    } catch (error) {
      return res.status(500).json({ success: false, error: error });
    }
  },
  onDeleteUserById: async (req, res) => {
    try {
      const user = await UserModel.deleteUserbyId(req.params.id);
      return res.status(200).json({
        success: true,
        message: `${user.deletedCount} users was deleted`,
      });
    } catch (error) {
      return res.status(200).json({ success: false, error: error });
    }
  },
};
