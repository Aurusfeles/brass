/*import mongo from "~/assets/js/mongo";


export default defineEventHandler(async function (event) {

    await mongo.connect();
    await mongo.db('brass').collection("games").replaceOne({
        _id: "mydoc"
    },
        {
            map: {
                rochdale: [
                    {},
                ]

            },
            me: {
                money: 21,
                counters: {
                    coal_mines: 5,
                    ironworks: 3,
                    ports: 6,
                    shipyards: 1,
                    cotton_mills: 8
                },
                cards: [
                    "coal_mine",
                    "cotton_mill",
                    "port",
                    "manchester",
                    "preston",
                    "rochdale",
                    "cotton_mill",
                    "fleetwood"
                ]

            },
            others: [
                {
                    name: "Player2",
                    cards: 8,
                    points: 10,
                    income: 20,
                    counters: {
                        coal_mines: 5,
                        ironworks: 3,
                        ports: 6,
                        shipyards: 1,
                        cotton_mills: 8
                    }

                }

            ]



        },
        { upsert: true });
    return {
        api: "works"
    }

})*/