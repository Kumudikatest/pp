let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (request, response) {

        cognito_idp.listUsers({
            UserPoolId: "us-east-1_D10y3fy0o",
            Limit: 10
        }, function (error, data) {
            if (error) {
                // implement error handling logic here
                console.log(error);
                throw error;
            }
            else {
                console.log(error);
            }
        });

    response.send({ "message": "Successfully executed" });
}