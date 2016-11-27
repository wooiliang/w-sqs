import AWS from 'aws-sdk';

export default class WSQS {
  constructor(awsDefaultRegion) {
    AWS.config.update({
      region: awsDefaultRegion,
    });

    this.sqs = new AWS.SQS();
  }

  sendMessage(params, callback) {
    this.sqs.sendMessage(params, (error, data) => {
      callback(error, data);
    });
  }
}
