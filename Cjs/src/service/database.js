// Export default
exports.connectDataBase = (dbName) => {
    console.log("Connection with " + dbName);
};
// Export async default
exports.desconnectDataBase = async (dbName) => {
    console.log("Desconnection with " + dbName);
}