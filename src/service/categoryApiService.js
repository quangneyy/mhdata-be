import db from '../models/index';

const getAllCategory = async () => {
    try {
        let category = await db.Category.findAll();
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

const getCategoryWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.Category.findAndCountAll({
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

const createNewCategory = async (data) => {
    try {
        await db.Category.create(data);
    } catch (e) {
        console.log(e);
    }
}

const deleteCategory = async (id) => {
    try {
        let category = await db.Category.findOne({
            where: { id: id }
        })

        if (category) {
            await category.destroy();
            return {
                EM: 'Delete category succeeds',
                EC: 0,
                DT: []
            }
        } else {
            return {
                EM: 'Category not exist',
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
    getAllCategory,
    createNewCategory,
    deleteCategory,
    getCategoryWithPagination,
}