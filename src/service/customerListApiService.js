import db from '../models/index';

const getAllCustomerList = async () => {
    try {
        let category = await db.CustomerList.findAll();
        if (category) {
            return {
                EM: 'get data success',
                EC: 0,
                DT: category
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

const getCustomerListWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.CustomerList.findAndCountAll({
            offset: offset,
            limit: limit,
            // attributes: ["id", "username", "email", "phone", "sex"],
            // include: { model: db.Group, attributes: ["name", "description"] },
            // order: [['name', 'DESC']]
        })

        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPages: totalPages,
            category: rows
        }

        return {
            EM: 'fetch ok',
            EC: 0,
            DT: data
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

const createNewCustomerList = async (data) => {
    try {
        await db.CustomerList.create(data);
    } catch (e) {
        console.log(e);
    }
}

const deleteCustomerList = async (id) => {
    try {
        let category = await db.CustomerList.findOne({
            where: { id: id }
        })

        if (category) {
            await category.destroy();
            return {
                EM: 'Delete CustomerList succeeds',
                EC: 0,
                DT: []
            }
        } else {
            return {
                EM: 'CustomerList not exist',
                EC: 2,
                DT: data
            }
        }

    } catch (e) {
        console.log(e);
        return {
            EM: 'error from service',
            EC: 1,
            DT: []
        }
    }
}

module.exports = {
    getAllCustomerList,
    createNewCustomerList,
    deleteCustomerList,
    getCustomerListWithPagination,
}