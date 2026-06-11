const p = require("./service/product.js")

async function main() {
    console.log("Carrinho")
    p.getFullName(183, "Headset")
}

main()