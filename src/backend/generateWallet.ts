import algosdk from "algosdk";

const account = algosdk.generateAccount();
const memonic = algosdk.secretKeyToMnemonic(account.sk);
//const address = algosdk.decodeAddress(memonic);

const publicKey: Uint8Array = Uint8Array.from(account.addr.publicKey);
const decoded = algosdk.encodeAddress(publicKey);

console.log("Address: ", decoded);
console.log("Memonic: ", memonic);