'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function Activity(amount) { }

function Payment(amount, receiver) {
    this.amount = amount;
    this.receiver = receiver;

    function getAmount() {
        if (this.amount == undefined) this.amount = amount
        return this.amount
    }

    function setAmount(amount) {
        if (amount <= 0) return false
        this.amount = amount
        return true;
    }

    function getReceiver() {
        if (this.receiver == undefined) this.receiver = receiver
        return this.receiver
    }

    function setReceiver(receiver) {
        this.receiver = receiver
    }

    return {
        getAmount, setAmount, getReceiver, setReceiver
    }
}

Payment.prototype.getReceiver = true;
Payment.prototype.setReceiver = true;

function Refund(amount, sender) {
    this.amount = amount;
    this.sender = sender;

    function getAmount() {
        if (this.amount == undefined) this.amount = amount
        return this.amount
    }

    function setAmount(amount) {
        if (amount <= 0) return false
        this.amount = amount
        return true;
    }

    function getSender() {
        if (this.sender == undefined) this.sender = sender
        return this.sender
    }

    function setSender(sender) {
        this.sender = sender
    }

    return {
        getAmount, setAmount, getSender, setSender
    }
}

Refund.prototype.getSender = true;
Refund.prototype.setSender = true;



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const objectType = readLine().trim();

    const inputsForObjectCreation = readLine().trim().split(' ');
    const updatedAmount = parseInt(readLine().trim());
    const updatedSenderReceiver = readLine().trim();
    switch (objectType) {
        case 'Payment':
            const paymentObj = new Payment(parseInt(inputsForObjectCreation[0]), inputsForObjectCreation[1]);
            ws.write(`Payment object created with amount ${paymentObj.getAmount()} and receiver ${paymentObj.getReceiver()}\n`);
            if (paymentObj.setAmount(updatedAmount)) {
                ws.write(`Amount updated to ${updatedAmount}\n`);
            } else {
                ws.write(`Amount not updated\n`);
            }
            paymentObj.setReceiver(updatedSenderReceiver);
            ws.write(`Receiver updated to ${updatedSenderReceiver}\n`);
            ws.write(`Payment object details - amount is ${paymentObj.getAmount()} and receiver is ${paymentObj.getReceiver()}\n`);
            ws.write(`Payment.prototype has property setAmount: ${Payment.prototype.hasOwnProperty('setAmount')}\n`);
            ws.write(`Payment.prototype has property getAmount: ${Payment.prototype.hasOwnProperty('getAmount')}\n`);
            ws.write(`Payment.prototype has property setReceiver: ${Payment.prototype.hasOwnProperty('setReceiver')}\n`);
            ws.write(`Payment.prototype has property getReceiver: ${Payment.prototype.hasOwnProperty('getReceiver')}\n`);
            break;
        case 'Refund':
            const refundObj = new Refund(parseInt(inputsForObjectCreation[0]), inputsForObjectCreation[1]);
            ws.write(`Refund object created with amount ${refundObj.getAmount()} and sender ${refundObj.getSender()}\n`);
            if (refundObj.setAmount(updatedAmount)) {
                ws.write(`Amount updated to ${updatedAmount}\n`);
            } else {
                ws.write(`Amount not updated\n`);
            }
            refundObj.setSender(updatedSenderReceiver);
            ws.write(`Sender updated to ${updatedSenderReceiver}\n`);
            ws.write(`Refund object details - amount is ${refundObj.getAmount()} and sender is ${refundObj.getSender()}\n`);
            ws.write(`Refund.prototype has property setAmount: ${Refund.prototype.hasOwnProperty('setAmount')}\n`);
            ws.write(`Refund.prototype has property getAmount: ${Refund.prototype.hasOwnProperty('getAmount')}\n`);
            ws.write(`Refund.prototype has property setSender: ${Refund.prototype.hasOwnProperty('setSender')}\n`);
            ws.write(`Refund.prototype has property getSender: ${Refund.prototype.hasOwnProperty('getSender')}\n`);
            break;
        default:
            break;
    }
}