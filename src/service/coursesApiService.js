import db from '../models/index';

const getAllCourse = async () => {
    try {
        let course = await db.Course.findAll(
            {
                attributes: ["id", "name", "author", "time", "image", "dateUpload"],
                include: { model: db.Category, attributes: ["id", "name"] },
            }
        );
        if (course) {
            return {
                EM: 'get data success',
                EC: 0,
                DT: course
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

const getCourseWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.Course.findAndCountAll({
            offset: offset,
            limit: limit,
        })

        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPages: totalPages,
            course: rows
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

const createNewCourse = async (data) => {
    try {
        await db.Course.create(data);
    } catch (e) {
        console.log(e);
    }
}

const updateCourse = async (data) => {
    try {
        let user = await db.Course.findOne({
            where: { id: data.id }
        })
        if (user) {
            //update
            user.save({
                
            })
        } else {
            //not found
        }
    } catch (e) {
        console.log(e);
    }
}

const deleteCourse = async (id) => {
    try {
        let course = await db.Course.findOne({
            where: { id: id }
        })

        if (course) {
            await course.destroy();
            return {
                EM: 'Delete course succeeds',
                EC: 0,
                DT: []
            }
        } else {
            return {
                EM: 'Course not exist',
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
    getAllCourse,
    getCourseWithPagination,
    createNewCourse,
    updateCourse,
    deleteCourse,
}