import { MongoClient } from "mongodb";
import sensitive_data from "./sensitive_data.js"

const client = new MongoClient("mongodb+srv://admin:" + sensitive_data.mongodbpass + "@cluster0.ewwaikm.mongodb.net", { useUnifiedTopology: true });

export default client;