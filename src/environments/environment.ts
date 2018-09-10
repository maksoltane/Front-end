// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  apiGatewayUrl: 'REPLACETHIS',
  cognitoClientId: '5kggqdknujnq97og35es08qj20',
  cognitoPoolId: 'eu-west-1_6c81V1B2V',
  accessKey: 'REPLACETHIS',
  secretAccessKey: 'REPLACETHIS',
  //
  userPoolId: 'eu-west-1_6c81V1B2V',
  clientId: '5kggqdknujnq97og35es08qj20',
  //
  region: 'us-east-1',
  awsRegion: 'us-east-1',
  //
  identityPoolId: 'eu-west-1:a3f5ba07-cbea-49f0-8f2e-f8028bb829d8',
  //
  rekognitionBucket: 'rekognition-pics',
  albumName: 'usercontent',
  bucketRegion: 'us-east-1',

  ddbTableName: 'LoginTrail',

  cognito_idp_endpoint: '',
  cognito_identity_endpoint: '',
  sts_endpoint: '',
  dynamodb_endpoint: '',
  s3_endpoint: ''
};


/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
