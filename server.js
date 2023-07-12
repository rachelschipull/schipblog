import express from 'express'
const app = express()
import { config } from "dotenv"

import { createConnection } from 'mysql2'

function loadEnvironment() {
    config();
    const connection = createConnection(process.env.DATABASE_URL)

    connection.connect(function(err) {
        if (err) throw err;
        console.log("Succesfully connected to PlanetScale!");
        process.exit(0)
    });
}

loadEnvironment()