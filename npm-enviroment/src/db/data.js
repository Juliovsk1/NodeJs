async function connectToDatabase(user, password) {
    if (user === process.env.usrdatabase && password === process.env.passworddatabase) {
        console.log("Successful!");
    }
    else {
        console.log("Error!");
    }
}

export default connectToDatabase;