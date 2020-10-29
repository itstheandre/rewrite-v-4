const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const taskSchema = new Schema(
  {
    title: String,
    body: String,
    ownerId: {type:ObjectId, ref:'User'}
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Task = model("Task", taskSchema);

module.exports = Task;
