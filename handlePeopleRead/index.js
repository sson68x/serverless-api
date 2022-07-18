// third party library
const dynamoose = require('dynamoose');

// Create schema
const peopleSchema = new dynamoose.Schema({
    id: String,
    name: String,
    location: String,
});

// Create model
const peopleModel = dynamoose.model('people-lab19', peopleSchema);

exports.handler = async (event) => {
    console.log(event.queryStringParameters);

    let response = {statusCode: null, body: null};

    try {
        let peopleRecords = await peopleModel.scan().exec();
        response.statusCode = 200;
        response.body = JSON.stringify(peopleRecords);

    } catch(e) {
        console.error(e);
        response.statusCode = 500;
        response.body = JSON.stringify(e.message);
    }

    return response;
};
