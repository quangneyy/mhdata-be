import db from '../models/index';

const getAllUser = async () => {
    try {
        let users = await db.User.findAll();
        if (users) {
            console.log(">>> check users: ", users);
            // let data = users.get({ plain: true });
            return {
                EM: 'get data success',
                EC: 0,
                DT: users
            }
        } else {
            return {
                EM: 'get data success',
                EC: 0,
                DT: []
            }
        }
    } catch (e) {
        console.log(e);
        return {
            EM: 'something wrongs with services',
            EC: 1,
            DT: []
        }
    }
}

const createNewUser = () => {
    
}

const updateUser = () => {
    
}

const deleteUser = () => {
    
}

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser
}