import { Location, RatingData } from "../utils/customTypes";

import algosdk from "algosdk";

const algodToken = 'L6Q3MUTO4EEEGDERLROLJZHZ2ORMO6QCEJC3I77QN56NO4VEC2YCTBPDVE';
const algodServer = 'https://testnet-api.algonode.cloud'; // or another provider
const algodPort = '';

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
const indexerClient = new algosdk.Indexer(algodToken, algodServer, algodPort);

// Use a predefined sender account (this is a demo keypair — never use real funds)
const HARD_CODED_PRIVATE_KEY = Uint8Array.from([/* put your private key array here */]);
const HARD_CODED_ACCOUNT = algosdk.mnemonicToSecretKey(algodToken) /* algosdk.generateAccount() */;

/**
 * @brief Submitting ratings to algorand blockchain through our token
 * @param rating 
 * @param eventName 
 * @param location 
 * @param timestamp 
 * @returns 
 */
export const submitRatingToAlgorand = async (
  rating: number,
  eventName: string,
  location: Location,
  timestamp=Date(),
): Promise<boolean> => {

  try {
    const sender = HARD_CODED_ACCOUNT;
    const params = await algodClient.getTransactionParams().do();

    const note = new TextEncoder().encode(JSON.stringify({
      rating, eventName, location, timestamp,
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
        const note = new TextDecoder().decode(
          Uint8Array.from(atob(txn.note), c => c.charCodeAt(0))
        );

        const parsed = JSON.parse(note);

        return {
          id: txn.id || txn["id"] || "unknown",
          rating: parsed.rating,
          eventName: parsed.eventName,
          timestamp: new Date(parsed.timestamp),
        } as RatingData;
      });
  } catch (err) {
    console.log("Error retrieving transactions: ", err);
    return [];
  }
};