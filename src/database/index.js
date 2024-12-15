import mongoose from "mongoose";

export const connectToDB = async () => {
  const MONGO_URI =
    "mongodb://codenow12345:passwordstre@ac-uxiigy6-shard-00-00.fs2nefu.mongodb.net:27017,ac-uxiigy6-shard-00-01.fs2nefu.mongodb.net:27017,ac-uxiigy6-shard-00-02.fs2nefu.mongodb.net:27017/?ssl=true&replicaSet=atlas-faws2x-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Failed to connect to Db"));
};
