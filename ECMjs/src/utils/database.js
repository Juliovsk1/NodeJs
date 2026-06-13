// Export object
async function connectDb (dbName) {
    console.log(`Connection with ${dbName}`);
};

async function desconnectDb (dbName) {
    console.log("Desconnection with " + dbName);
}

const dataType = {
    userType: 'adm',
    dataType: 'local'
};

// Multiple exports
export {
    connectDb,
    desconnectDb,
    dataType,
};
