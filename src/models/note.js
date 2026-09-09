import { Schema, model } from 'mongoose';

const tagsEnum = [
  'Work',
  'Personal',
  'Meeting',
  'Shopping',
  'Ideas',
  'Travel',
  'Finance',
  'Health',
  'Important',
  'Todo',
];

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: false,
      trim: true,
      default: '',
    },
    tag: {
      type: String,
      enum: tagsEnum,
      default: 'Todo',
    },
  },
  {
    timestamps: true,
  },
);

export const Note = model('Note', noteSchema);
