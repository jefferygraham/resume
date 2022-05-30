// Import required AWS SDK clients and commands for Node.js
import { QueryCommand } from '@aws-sdk/client-dynamodb';
import { ddbDocClient } from './dynamoDBDocClient.js';

// Set the parameters
export const params = {
  KeyConditionExpression: 'Visits = :s',
  ExpressionAttributeValues: {
    ':s': { N: '1' },
  },
  TableName: 'VISITORS',
};

export const run = async () => {
  try {
    const data = await ddbDocClient.send(new QueryCommand(params));
    console.log(data.Items[0].Visits);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();
