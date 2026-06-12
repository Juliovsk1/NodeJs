const product = require("./service/product.js")
const config = require("./service/config.js")
const database = require("./service/database.js")

async function main() {
    console.log("Carrinho")

    product.getFullName(183, "Headset")
    product.getProductPrice(20, 183,53)

    console.log(config.devArea.version);
    console.log(config.client);

    database.connectDataBase("market");
    console.log("Sucess!");
    database.desconnectDataBase("amrket");
    console.log("Bye bye!");
}

main()