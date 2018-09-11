import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'eu-west-1:65fd3053-c503-4473-9dd3-7054ac578f4d',
        
        // REQUIRED - Amazon Cognito Region
        region: 'eu-west-1',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'eu-west-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'eu-west-1_mysLNmYOE',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '6ofg2apig48q5hotb9fl051phl',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,

        // OPTIONAL - Configuration for cookie storage
        cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: '.yourdomain.com',
        // OPTIONAL - Cookie path
            path: '/',
        // OPTIONAL - Cookie expiration in days
            expires: 365,
        // OPTIONAL - Cookie secure flag
            secure: true
        },

        // OPTIONAL - customized storage object
       // storage: new Storage(),
        
        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});