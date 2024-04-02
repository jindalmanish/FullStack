const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const dbName = "ecommerce";
const collectionName = "products";
const client = new MongoClient(uri);

async function main() {
try {
await client.connect();
const database = client.db(dbName);
const collection = database.collection(collectionName);

// Insert a document (car product)
await collection.insertOne({
  name: "Tesla Model S",
  brand: "Tesla",
  type: "Car",
  price: 79999,
  colors: ["Red", "Blue", "White"],
  dateAdded: new Date(),
});
console.log("Car product inserted");

// Insert another document (car product)
const insertResult = await collection.insertOne({
  name: "BMW X5",
  brand: "BMW",
  type: "Car",
  price: 69999,
  colors: ["Black", "Silver", "Grey"],
  dateAdded: new Date(),
});
console.log(`Document inserted with id: ${insertResult.insertedId}`);
} finally {
// Close the connection
await client.close();
console.log("Connection closed");
}
}
main().catch(console.error);