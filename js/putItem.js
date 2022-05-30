import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { ddbDocClient } from './dynamoDBDocClient.js';

export const putItem = async () => {
  // Set the parameters.
  const params = {
    TableName: 'VISITORS',
    Item: {
      Visits: 1,
    },
  };
  try {
    const data = await ddbDocClient.send(new PutCommand(params));
    console.log('Success - item added or updated', data);
  } catch (err) {
    console.log('Error', err.stack);
  }
};
putItem();
