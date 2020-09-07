import mongoose from "mongoose";
import NoteSchema from "../models/Note";
import ProfileSchema from "../models/Profile";
import CustomerSchema from "../models/Customer";
class DbContext {
  Notes = mongoose.model("Note", NoteSchema);
  Customer = mongoose.model("Customer", CustomerSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();
