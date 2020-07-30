import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

export const USER_TYPES = {
  CONSUMER: "consumer",
  SUPPORT: "support",
  BOT: "bot",
};

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    firstName: String,
    lastName: String,
    phoneNumber: String,
    profileImage: String,
    type: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);

userSchema.statics.createUser = async function (
  firstName,
  lastName,
  phoneNumber,
  profileImage,
  type
) {
  try {
    const user = await this.create({
      firstName,
      lastName,
      phoneNumber,
      profileImage,
      type,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

userSchema.statics.getUserById = async function (id) {
  try {
    const user = await this.findOne({ _id: id });
    if (!user) throw { error: "Not found user with this id " };
    return user;
  } catch (error) {
    throw error;
  }
};

userSchema.statics.getUsers = async function () {
  try {
    const users = await this.find();
    return users;
  } catch (error) {
    throw error;
  }
};

userSchema.statics.deleteUserbyId = async function (id) {
  try {
    const result = await this.remove({ _id: id });
    return result;
  } catch (error) {
    throw error;
  }
};
userSchema.statics.getUserByIds = async function (ids) {
  try {
    const users = await this.find({ _id: { $in: ids } });
    return users;
  } catch (error) {
    throw error;
  }
};
userSchema.statics.getUserByImageUrl = async function (ImageUrl) {
  try {
    const users = await this.find({ profileImage: { $in: ImageUrl } });
    return users;
  } catch (error) {
    throw error;
  }
};

userSchema.statics.getUserByPhoneNumber = async function (phoneNumber) {
  try {
    phoneNumber = "+".concat(
      JSON.stringify(phoneNumber).split(" ").join("").replace(/"/g, "")
    );
    console.log(phoneNumber);
    const users = await this.find({ phoneNumber: { $in: phoneNumber } });
    return users;
  } catch (error) {
    throw error;
  }
};
userSchema.statics.getUserByFirstName = async function (firstName) {
  try {
    const users = await this.find({
      firstName: { $in: firstName },
    });
    return users;
  } catch (error) {
    throw error;
  }
};
userSchema.statics.getUserByLastName = async function (lastName) {
  try {
    const users = await this.find({
      lastName: { $in: lastName },
    });
    return users;
  } catch (error) {
    throw error;
  }
};

userSchema.statics.getUserByFullName = async function (fullName) {
  try {
    fullName = JSON.stringify(fullName).replace(/"/g, "").split(" ");
    const users = await this.find({
      firstName: { $in: [fullName[0], fullName[1]] },
      lastName: { $in: [fullName[0], fullName[1]] },
    });
    return users;
  } catch (error) {
    throw error;
  }
};

export default mongoose.model("User", userSchema);
