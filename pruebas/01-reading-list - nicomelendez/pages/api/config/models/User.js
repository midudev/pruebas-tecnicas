import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    clave: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("clave")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.clave = await bcrypt.hash(this.clave, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.comprobarPassword = async function (clave) {
  return await bcrypt.compare(clave, this.clave);
};

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
