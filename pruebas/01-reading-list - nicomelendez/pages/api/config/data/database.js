import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    process.exit(1);
  }
};

export default connectionDB;
