import mongoose from "mongoose";

const url = process.env.MONGODB_URI;

function connect() {
  mongoose.connect(url)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch(err => {
      console.log(err);
    });
}

export default connect;