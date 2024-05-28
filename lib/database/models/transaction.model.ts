import { Schema, model , models , Document } from "mongoose";



const TransactionSchema = new Schema({
    createdAt:{
        type: Date,
        default: Date.now
    },
    stripeId:{
        type:String,
        required:true,
        unique:true
    },
    amount : {
        type: Number,
        required: true
    },
    plan:{
        type:String,
    },
    credit : {
        type: String
    },
    buyer : {
        type: Schema.Types.ObjectId,
        ref:'User'
    }
});


const Transaction = models?.Transaction || model('Transaction' , TransactionSchema);

export default Transaction;