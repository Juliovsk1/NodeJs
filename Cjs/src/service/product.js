// Módulo para todas as funções de produto
async function getFullName(codeId, productName) {
    console.log("Produtos: " + codeId + "--" + productName);
};

async function getProductPrice(codeId, productPrice) {
    console.log("Preço: " + codeId + "--" + productPrice);
    await doBreak();
};

// hidden function
async function doBreak(){
    console.log("\n");
};

// hidden object
const apiLocal = {
    url: "www.google.com"
};

async function getProductPrice(cupomDesconto, codeId, productPrice) {
    desconto = productPrice - cupomDesconto;
    console.log("Cupom: " + codeId + " -- Preço: " + desconto);
};

module.exports = {
    getFullName,
    getProductPrice,
};