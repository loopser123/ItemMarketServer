import mongoose from 'mongoose';
import marketItem from '../models/marketItem.model'; 
 
const connectDb = () => {
  return mongoose.connect('mongodb://127.0.0.1/storeDb',{useNewUrlParser: true, useUnifiedTopology: true});
};
 
const models = { marketItem };
 
export { connectDb };
 
export default models;