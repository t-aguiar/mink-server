function getEvent(path = "/", method = "GET", queryStringParameters = {}, body = null) {
    return {
        "body": body,
        "requestContext": {
            "resourceId": "123456",
            "apiId": "1234567890",
            "resourcePath": path,
            "httpMethod": method,
            "requestId": "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
            "accountId": "123456789012",
            "stage": "prod",
            "identity":
            {
                "apiKey": null,
                "userArn": null,
                "cognitoAuthenticationType": null,
                "caller": null,
                "userAgent": "Custom User Agent String",
                "user": null,
                "cognitoIdentityPoolId": null,
                "cognitoAuthenticationProvider": null,
                "sourceIp": "127.0.0.1",
                "accountId": null
            },
            "extendedRequestId": null,
            "path": path
        },
        "queryStringParameters": queryStringParameters,
        "headers":
        {
            "Cache-Control": "no-cache",
            "Postman-Token": "7e446cfb-748b-4b23-92b6-4ba93e25e7b0",
            "User-Agent": "PostmanRuntime/6.4.1",
            "Accept": "*/*",
            "Host": "localhost:3000",
            "Accept-Encoding": "gzip, deflate",
            "Connection": "keep-alive",
            "X-Forwarded-Proto": "http",
            "X-Forwarded-Port": "3000"
        },
        "pathParameters": null,
        "stageVariables": null,
        "path": path,
        "httpMethod": method,
        "isBase64Encoded": false
    };
};

function getContext() {
    return {};
}

function writeOutput(output, outputFile = "/tmp/test-out") {
    const fs = require('fs');
    fs.truncate("/tmp/test-out", "");
    fs.writeFile("/tmp/test-out", output);
}

module.exports = {
    getEvent,
    getContext,
    writeOutput
}
