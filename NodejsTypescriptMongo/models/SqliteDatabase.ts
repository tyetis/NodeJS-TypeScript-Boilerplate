import * as sqlite3 from 'sqlite3'
import { Database, open } from 'sqlite'

let sqliteDb: Database

export default async function InitSqlite(): Promise<void> {
    sqliteDb = await open({
        filename: './data/node.db',
        driver: sqlite3.Database
    });
    sqlite3.verbose()
}

export {
    sqliteDb
}