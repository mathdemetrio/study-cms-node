import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/nodecms", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

export default mongoose;
