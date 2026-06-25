import connectToDatabase from "./db/data.js";

const log = console.log;

async function main() {
    await connectToDatabase(process.env.usrdatabase, process.env.passworddatabase);
}

main()