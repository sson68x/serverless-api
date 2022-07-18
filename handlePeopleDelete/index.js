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

    let {id} = event.queryStringParameters;

    let response = {statusCode: null, body: null};

    try {
        let deletePersonRecord = await peopleModel.delete({'id': id});
        response.statusCode = 200;
        response.body = JSON.stringify(deletePersonRecord);

    } catch(e) {
        console.error(e);
        response.statusCode = 500;
        response.body = JSON.stringify(e.message);
    }

    return response;
};
