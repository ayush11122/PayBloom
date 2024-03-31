const {Account} = require('../db/db');
const mongoose = require('mongoose');

const balance = async (req, res)=>{
    const userId = req.userId;
    const account = await Account.findOne({userId: userId});
    res.status(200).json({
        balance: account.balance
    })
}

const transfer = async (req, res)=>{

    const session = await mongoose.startSession();
    session.startTransaction();
    const { to , amount} = req.body;
    const toAccount = await Account.findOne({userId: to}).session(session);
    const fromAccount = await Account.findOne({userId: req.userId}).session(session);
    if(fromAccount.balance < amount || !fromAccount.balance){
        return res.status(411).json({
            message: "Insufficient balance"
        })
    }
    if(amount<= 0 || !amount){
        return res.status(411).json({
            message: "Invalid amount"
        })
    }
    if(!toAccount.balance){
        return res.status(411).json({
            message: "Receiver's end problem"
        })
    }
    await Account.updateOne({userId: to}, {
        $inc: {                     // $inc is the increment operator
            balance: amount
        }
    }).session(session);

    await Account.updateOne({userId: req.userId}, {
        $inc: {
            balance: -amount
        }
    }).session(session);
    await session.commitTransaction();
    res.status(200).json({
        message: "Transfer completed successfully"
    })
};


module.exports = {
    balance,
    transfer
}