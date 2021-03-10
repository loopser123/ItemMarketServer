import mongoose from 'mongoose';
 
const marketItemSchema = new mongoose.Schema({
    name :String,
    price : String,
    description:String,
},{ autoCreate: true});

 
const marketItems = mongoose.model('marketItems', marketItemSchema);
 
export default marketItems;