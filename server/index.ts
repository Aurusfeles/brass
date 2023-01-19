import * as mongo from "~/assets/js/mongo";

export default async () => {
    // perform a database connection when the server starts
    mongo.connectToServer(function (err) {
        if (err) {
            console.error(err);
            process.exit();
        }
    });
};