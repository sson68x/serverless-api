# LAB 18

## Project: AWS: API, Dynamo and Lambda

### Author: Simon Son

### Problem Domain

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services

* Databae: DynamoDB
  * 1 Table required
* Routing: API Gateway
  * POST
    * Given a JSON body, inserts a record into the database
    * Returns an object representing one record, by its id (##)
  * GET
    * Returns an array of objects representing the records in the database
    * Returns an object representing one record, by its id (##)
  * PUT
    * Given a JSON body and an ID (##), updates a record in the database
    * Returns an object representing one record, by its id (##)
  * DELETE
    * Given an id (##) removes the matching record from the database
    * Returns an empty object

### Links and Resources

* [GitHub](https://github.com/sson68x/serverless-api/pull/1)
* [Class Demo](https://github.com/codefellows/seattle-javascript-401d47/tree/main/class-18)

### Setup

#### `.env` requirements (where applicable)

* N/A

### UML

![Lab18 UML](/assets/img/lab18%20uml.png)
