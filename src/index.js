import AWS from 'aws-sdk';

export default class WSQS {
  constructor(awsDefaultRegion) {
    AWS.config.update({
      region: awsDefaultRegion,
    });

    this.sqs = new AWS.SQS();
  }

  sendMessage(params) {
    return new Promise((resolve, reject) => {
      this.sqs.sendMessage(params, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
}
