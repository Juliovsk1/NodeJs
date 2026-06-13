// Multiple imports
import * as database from "./src/utils/database.js"
// Destrucuring
import {getApiData} from "./src/utils/api.js"

database.connectDb('db')

console.log("Sucess!")

database.desconnectDb('db')

getApiData();