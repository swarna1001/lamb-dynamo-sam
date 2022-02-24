console.log('Loading function');

exports.handler = function (event, context, callback) {
    console.log(JSON.stringify(event, null, 2));
    event.Records.forEach(function (record) {
        console.log(record.eventID);
        console.log(record.eventName);
        console.log('DynamoDB Record: %j', record.dynamodb);
        console.log("TESTING");
        console.log("CHANGES");
        console.log("LOTS OF CHANGES");
    });
    callback(null, "message");
};

