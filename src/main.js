const p = require("./service/product.js")
const config = require("./service/config.js")

async function main() {
    console.log("Carrinho")

    // p.getFullName(183, "Headset")
    // p.getProductPrice(183, 141,53)

    console.log(config.devArea.version)
    console.log(config.client)

}

main()