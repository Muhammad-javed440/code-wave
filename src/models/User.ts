import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name.'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email.'],
      unique: true,
      match: [/.+\@.+\..+/, 'Please provide a valid email address.'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password.'],
      select: false, // Do not return password by default
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema); 