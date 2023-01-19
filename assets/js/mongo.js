/*import { MongoClient } from "mongodb";
import sensitive_data from "./sensitive_data.js"

const client = new MongoClient("mongodb+srv://" + sensitive_data.user + ":" + sensitive_data.pass + "@cluster0.ewwaikm.mongodb.net", { useUnifiedTopology: true });
(async () => {
    await client.connect();
})();
export default client;*/

import { MongoClient } from "mongodb";
import sensitive_data from "./sensitive_data.js"
const connectionString = "mongodb+srv://" + sensitive_data.user + ":" + sensitive_data.pass + "@cluster0.ewwaikm.mongodb.net";
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbConnection;

export function connectToServer(callback) {
    client.connect(function (err, db) {
        if (err || !db) {
            return callback(err);
        }

        dbConnection = db.db("brass");
        console.log("Successfully connected to MongoDB.");

        return callback();
    });
}

export function getDb() {
    return dbConnection;
}
