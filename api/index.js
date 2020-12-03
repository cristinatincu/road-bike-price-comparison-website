//Import the express and url modules
let express = require('express');
let url = require("url");
const path = require('path');

//Status codes defined in external file
require('./http_status.js');

//The express module is a function. When it is executed it returns an app object
let app = express();

//Set up the application to handle GET requests sent to the user path
app.get('/bikes', handleProductGet);
app.get('/bikes/*', handleProductGet);

//Start the app listening on port 8080
app.listen(8080)

//Import the mysql module
let mysql = require('mysql');

//Create a connection object with the user details
let connectionPool = mysql.createPool({
    connectionLimit: 1,
    host: "localhost",
    user: "ct",
    password: "456871",
    database: "price_comparison",
    debug: false
});

/* Handles GET request sent to products path
   Processes path and query string and calls appropriate functions to
   return the data. */
async function handleProductGet(request, response){
    //Parse the URL
    let urlObj = url.parse(request.url, true)

    //Extract object containing queries from URL object.
    let queries = urlObj.query;

    //Get the pagination and search parameters if they have been set. Will be undefined if not set.
    let numItems = request.query.numItems;
    let offset = request.query.offset;
    let query = request.query.search;

    //Split the path of the request into its components
    let pathArray = urlObj.pathname.split("/");

    //Get the last part of the path
    let pathEnd = pathArray[pathArray.length - 1];


    //If the last part of the path is a valid product id, return data about that product
    let regEx = new RegExp('^[0-9]+$');//RegEx returns true if string is all digits.

    try {
        if (pathEnd === 'bikes') {
            //Get the total number of products for pagination
            let bikeCount = await getBikeCount(query);

            //Get the products
            let bikes = await getBikes(numItems, offset, query);

            //Combine into a single object and send back to client
            let returnObj = {
                numberOfRoadBikes: bikeCount,
                roadBikes: bikes
            }
            response.json(returnObj);
        }
        else if (regEx.test(pathEnd)){
            let bike = await getBike(pathEnd);
            response.json(bike);
        }
    } catch (ex) {
        response.status(HTTP_STATUS.NOT_FOUND);
        response.send("{error: '" + JSON.stringify(ex) + "', url: " + request.url + "}");
    }

}


/** Returns a promise to get the total number of products */
async function getBikeCount(query){
    //Build SQL query
    let sql = "SELECT COUNT(*) FROM road_bike";

    if (query && query !== '') {
        query = '%' + query.replace(/\s/g, '%') + '%';
        sql += " WHERE name LIKE '" + query + "'";
    }

    //Execute promise to run query
    let result = await executeQuery(sql);
    console.log(result[0]["COUNT(*)"]);
    //Extract the data we need from the result
    return result[0]["COUNT(*)"];
}


/** Returns all the products with optional pagination */
async function getBikes(numItems, offset, query=''){
    let sql = "SELECT id, name, image_url FROM road_bike";

    if (query !== '') {
        query = '%' + query.replace(/\s/g, '%') + '%';
        sql += " WHERE name LIKE '" + query + "'";
    }

    //Limit the number of results returned, if this has been specified in the query string
    if (numItems !== undefined && offset !== undefined) {
        sql += " LIMIT " + numItems + " OFFSET " + offset;
    }

    //Return promise to run query
    return executeQuery(sql);
}


/** Returns a promise to get details about a single product */
async function getBike(bikeId){
    let sql = "SELECT r.name, r.image_url, r.description, c.size, c.color, c.price, c.url FROM road_bike r, " +
        "product_comparison c WHERE c.road_bike_id = r.id and r.id=" + bikeId;
    return executeQuery(sql);
}


/** Wraps connection pool query in a promise and returns the promise */
async function executeQuery(sql){
    //Wrap query around promise
    let queryPromise = new Promise( (resolve, reject)=> {
        //Execute the query
        connectionPool.query(sql, function (err, result) {
            //Check for errors
            if (err) {
                console.log(err)
                //Reject promise if there are errors
                reject(err);
            }

            //Resole promise with data from database.
            resolve(result);
        });
    });

    //Return promise
    return queryPromise;
}

module.exports = app;


