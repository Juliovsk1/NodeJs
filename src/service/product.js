// Módulo para todas as funções de produto
async function getFullName(codeId, productName) {
    console.log("Produtos: " + codeId + "--" + productName);
}

async function getProductPrice(codeId, productPrice) {
    console.log("Preço: " + codeId + "--" + productPrice);
}

async function getProductPrice(cupomDesconto) {
    console.log("Cupom: " + codeId + "--" + productPrice);
}

module.exports = {
    getFullName,
    getProductPrice,
};