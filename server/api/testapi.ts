import mongo from "~/assets/js/mongo";


export default defineEventHandler(async function (event) {

    // await mongo.connect();


    console.log("api", getQuery(event));
    return "ok"
    /*
    await mongo.db('brass').collection("games").replaceOne({
        _id: "94425631"
    },
        {
            map: {
                rochdale: [
                    {},
                ]

            },
            me: {
                money: 21,
                tiles: {
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
                    tiles: {
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
*/
})