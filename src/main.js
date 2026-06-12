const product = require("./service/product.js")
const config = require("./service/config.js")

async function main() {
    console.log("Carrinho")

    product.getFullName(183, "Headset")
    product.getProductPrice(20, 183,53)

    console.log(config.devArea.version)
    console.log(config.client)

}

main()