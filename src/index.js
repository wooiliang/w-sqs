import AWS from 'aws-sdk';
import shortid from 'shortid';

export default class WDynamoDB {
  constructor(awsDefaultRegion) {
    AWS.config.update({
      region: awsDefaultRegion,
      endpoint: `https://dynamodb.${awsDefaultRegion}.amazonaws.com`
    });

    this.docClient = new AWS.DynamoDB.DocumentClient();
  }

  get(params, callback) {
    this.docClient.get(params, (error, data) => {
      callback(error, data);
    });
  }

  put(params, callback) {
    const uuid = shortid.generate();
    const now = new Date();
    params.Item.id = uuid;
    params.Item.createdAt = now.toISOString();
    params.Item.updatedAt = now.toISOString();
    this.docClient.put(params, (error, data) => {
      if (error) {
        callback(error);
      } else {
        data.id = uuid;
        callback(null, data);
      }
    });
  }

  scan(params, callback) {
    this.docClient.scan(params, (error, data) => {
      callback(error, data);
    });
  }

  remove(params, callback) {
    this.docClient.delete(params, (error, data) => {
      callback(error, data);
    });
  }
}
