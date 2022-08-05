import db from '../models/index';
export const initTables = () => {
    try {
        console.log(">>> START CREATE TABLES IF NOT EXIST...")
        const sequelize = db.sequelize;
        console.log(">>> END CREATE TABLES IF NOT EXIST...")
        return sequelize.sync({
            force: false, // create the table if not exist, not drop the table
            alter: true// for update when update new fields
        });
    } catch (error) {
        console.log(">>> ERROR CREATE TABLES IF NOT EXIST...")
        console.log(error);
    }
}


