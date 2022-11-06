import mongo from "~/assets/js/mongo";


export default defineEventHandler(async function (event) {

    await mongo.connect();
    await mongo.db('brass').collection("games").replaceOne({
        _id: "mydoc"
    }, { date: new Date() }, { upsert: true });
    return {
        api: "works"
    }

})