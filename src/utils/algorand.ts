import { saveRating, calculateStats } from './storage';
import algosdk from 'algosdk';

/**
 * Submit rating (simplified without wallet requirement)
 */
export const submitRating = async (
  rating: number, eventName: string, sender: string, signTxn: (txn: algosdk.Transaction) => Promise<Uint8Array>
): Promise<boolean> => {
  try {
    const algodClient = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');

    const params = await algodClient.getTransactionParams().do();

    console.log("Fetched params:", params);

    const note = new TextEncoder().encode(JSON.stringify({ rating, eventName }));

    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: sender,
      to: sender, // self-transfer to embed data
      amount: 0,
      note,
      suggestedParams: params,
    });

    console.log("Unsigned txn:", txn);

    const signedTxn = await signTxn(txn);
    console.log("Signed txn:", signedTxn);

    // ⚠️ COMMENT OUT BROADCAST if testing without TestNet ALGO
    // const { txId } = await algodClient.sendRawTransaction(signedTxn).do();
    // console.log("Submitted with txId:", txId);

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