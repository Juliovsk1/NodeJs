async function connectDb (dbName) {
    console.log(`Connection with ${dbName}`);
};

async function desconnectDb (dbName) {
    console.log("Desconnection with " + dbName);
}

export default connectDb;