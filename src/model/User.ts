import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
const MessageModel = mongoose.model<Message>("Message", MessageSchema);

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  expiryCode: Date;
  isAcceptingMessages: boolean;
  messages: Message[];
  isVerified: boolean;
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is Required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
    minlength: [6, "Please create password greater than 6 characters"],
  },
  verifyCode: {
    type: String,
    required: true,
  },
  expiryCode: {
    type: Date,
    required: [true, "Please provide Expiry Code"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },
  messages: {
    type: [MessageSchema],
  },
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default {
  UserModel,
  MessageModel,
};
