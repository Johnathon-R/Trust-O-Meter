import { Location, RatingData } from "../utils/customTypes";
import { Buffer } from 'buffer';

import algosdk from "algosdk";

// Algod server information
const algodToken = '';
const algodServer = 'https://testnet-api.algonode.cloud'; // or another provider
const algodPort = '';

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
const indexerClient = new algosdk.Indexer(algodToken, 'https://testnet-idx.algonode.cloud', algodPort);

// Use a predefined sender account (this is a demo keypair — never use real funds)
const MNEMONIC = "govern tumble become ketchup useful enter stem top pole curtain husband parade civil grape move shield drill airport napkin ecology shock fluid stomach absent sort";
const HARD_CODED_ACCOUNT = algosdk.mnemonicToSecretKey(MNEMONIC);

/**
 * @brief Submitting ratings to algorand blockchain through our token
 * @param rating 
 * @param eventName 
 * @param location 
 * @param timestamp 
 * @returns 
 */
export const submitRatingToAlgorand = async (
  rating: number, eventName: string, location: Location, timestamp=Date()): Promise<boolean> => {

  try {
    const sender = HARD_CODED_ACCOUNT;
    const params = await algodClient.getTransactionParams().do();

    const note = new TextEncoder().encode(JSON.stringify({
      rating, eventName, location, timestamp
    }));

    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      sender: sender.addr,
      receiver: sender.addr,
      amount: 0,
      note,
      suggestedParams: params,
    });

    const signedTxn = txn.signTxn(sender.sk);
    const txId = await algodClient.sendRawTransaction(signedTxn).do();
    await algosdk.waitForConfirmation(algodClient, txId.txid, 4);

    return true;;
  } catch (err) {
    console.error("Blockchain error: ", err);
    return false;
  }
};

/**
 * @brief Search for all the ratings from our token
 * @returns 
 */
export const searchRatings = async (): Promise<RatingData[]> => {
  try {
    const result = await indexerClient.searchForTransactions()
      .address(HARD_CODED_ACCOUNT.addr)
      .notePrefix(new TextEncoder().encode('{'))
      .do();

    return result.transactions
      .filter(txn => txn.note)
      .map(txn => {
        try {
          // Base64 decoding of note (txn.note is a base64 string)
          const note = new TextDecoder().decode(
            new Uint8Array(Buffer.from(txn.note, 'base64'))
          );
          const parsed = JSON.parse(note);

          // Defensive checks
          if (typeof parsed.rating !== 'number' || typeof parsed.eventName !== 'string' || typeof parsed.timestamp !== 'string') {
            console.warn("Invalid note structure:", parsed);
            return null;
          }

          // Returning Rating data note object
          return {
            id: txn.id || txn["id"] || "unknown",
            rating: parsed.rating,
            eventName: parsed.eventName,
            timestamp: new Date(parsed.timestamp),
          } as RatingData;
        } catch (innerErr) {
          console.log("Error retrieving transactions: ", innerErr);
          null;
        }
      }).filter((x): x is RatingData => x !== null);
  } catch (err) {
    console.log("Error retrieving transactions: ", err);
    return [];
  }
};