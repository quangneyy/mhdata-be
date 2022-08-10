import db from '../models/index';

const getAllEvaluate = async () => {
    try {
        let evaluate = await db.Evaluate.findAll(
            {
                attributes: ["id", "averageRating", "numberReviews", "comments"],
                include: [{ model: db.User, attributes: ["username", "email"] }, 
                { model: db.Course, attributes: ["name", "author"] }],
                // include: { model: db.Course, attributes: ["name", "author"] },
            },
            {
                attributes: ["id", "averageRating", "numberReviews", "comments"],
                // include: { model: db.User, attributes: ["username", "email"] },
                include: { model: db.Course, attributes: ["name", "author"] },
            }
        );
        if (evaluate) {
            return {
                EM: 'get data success',
                EC: 0,
                DT: evaluate
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

const getEvaluateWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.Evaluate.findAndCountAll({
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
            evaluate: rows
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

const createNewEvaluate = async (data) => {
    try {
        await db.Evaluate.create(data);
    } catch (e) {
        console.log(e);
    }
}

const deleteEvaluate = async (id) => {
    try {
        let evaluate = await db.Evaluate.findOne({
            where: { id: id }
        })

        if (evaluate) {
            await evaluate.destroy();
            return {
                EM: 'Delete evaluate succeeds',
                EC: 0,
                DT: []
            }
        } else {
            return {
                EM: 'Evaluate not exist',
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
    getAllEvaluate,
    createNewEvaluate,
    deleteEvaluate,
    getEvaluateWithPagination,
}