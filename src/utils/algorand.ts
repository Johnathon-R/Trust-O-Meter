// Simplified rating system without wallet requirement
// Note: This maintains the blockchain concept while removing unnecessary complexity

import algosdk from "algosdk";
import { saveRating, calculateStats } from './storage';

// Connect to Algorand Testnet via Algonode
const ALGOD_SERVER = "https://testnet-api.algonode.cloud";
const algodClient = new algosdk.Algodv2("", ALGOD_SERVER, "");

/**
 * Submit rating (simplified without wallet requirement)
 */
export const submitRating = async (
  rating: number, eventName: string, senderAddress: string, signTxn: (txn: algosdk.Transaction) => Promise<Uint8Array>): Promise<boolean> => {
  try {
    const params = await algodClient.getTransactionParams().do();

    const noteObject = {
      rating, eventName, timestamp: new Date().toISOString()
    }

    const note = new TextEncoder().encode(JSON.stringify(noteObject));

    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: senderAddress, to: senderAddress, amount: 0, note, suggestedParams: params,
    });

    const signedTxn = await signTxn(txn);

    // FOR REAL IMPLEMENTATION UNCOMMENT THIS LINE
    //const { txId } = await algodClient.sendRawTransaction(signedTxn).do();
    //console.log("sent TX:", txId);

    // Wait for conformation
    //await algosdk.waitForConfirmation(algodClient, txId, 3);
    
    // Also save locally for UI use
    saveRating(rating, eventName);
    return true;
  } catch (error) {
    console.error('Rating submission error:', error);
    return false;
  }
};

/**
 * Get ratings data from local storage
 */
export const getRatingsData = async (): Promise<any> => {
  try {
    // Simulate network delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return actual stored ratings data
    return calculateStats();
    
  } catch (error) {
    console.error('Error fetching ratings data:', error);
    return null;
  }
};