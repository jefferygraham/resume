// Set the parameters.
import { GetCommand } from '@aws-sdk/lib-dynamodb';
import { ddbDocClient } from './dynamoDBDocClient.js';

export const params = {
  TableName: 'VISITORS',
  Key: {
    Visits: 1,
  },
};

export const getItem = async () => {
  try {
    const data = await ddbDocClient.send(new GetCommand(params));
    console.log('Success :', data.Item);
  } catch (err) {
    console.log('Error', err);
  }
};
getItem();
