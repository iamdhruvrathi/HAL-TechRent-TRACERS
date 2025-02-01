/* global use, db */

// Define the database and collection names
const database = 'rentTechDB';
const collection = 'products';

// Switch to the database
use(database);

// Create a collection
db.createCollection(collection);

print(`Database: ${database} and Collection: ${collection} created successfully.`);
