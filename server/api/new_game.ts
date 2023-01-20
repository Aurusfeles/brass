import * as mongo from "~/assets/js/mongo";
import * as possibilities from "~/assets/js/possibilities";
import hasha from "hasha";



async function make_brand_new_token() {

    let token = hasha(Date.now().toString()).substring(0, 16);
    // Vérifier que le token n'est pas déjà pris

    /*const pg_request = `SELECT usr_token from auth."t_user_usr" where usr_token=$1;`;
    try {
        let pg_res = await pg_pool.query(pg_request, [token])
        if (pg_res.rows.length == 0) {
            return token;
        }
    } catch (pg_err) {
        console.log('pg_error :', pg_err.stack)
        return undefined;
    }*/
    return token;
}


export default defineEventHandler(async function (event) {

    const dbConnect = mongo.getDb();
    const params = getQuery(event);

    dbConnect
        .collection("games")
        .replaceOne({
            _id: await make_brand_new_token()
        },
            new possibilities.Game(params.name, params.password_protected, params.password)
            ,
            { upsert: true });
    return "ok"
});