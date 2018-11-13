/**
 * Config for HELPERS
 * 
 */

const database_name = `fetch`;
const DB_HOSTNAME = `localhost`;
const DB_PORT = 27017;


export default {
    "connectionString" : `mongodb://${DB_HOSTNAME} : ${DB_PORT}/${database_name}`,
    "successMsg" : "Database Connection SUCCESS!!!",
    "errorMsg" : "MONGO CONNECTION ERROR!!",
    "secret" : "BONY BONY FLUFF. PEOPLE CRY TO BUTTS. THIS IS MY SECRET. BLessed Old Gods. MINGLE mingle.... !!!!!! TO TO TOT TOTO x0x0 366 leapy!!"
}