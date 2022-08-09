import db from '../models/index';

const getAllCourses = async () => {
    try {
        let courses = await db.Courses.findAll();
        if (courses) {
            return {
                EM: 'get data success',
                EC: 0,
                DT: courses
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

const getCoursesWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.Courses.findAndCountAll({
            offset: offset,
            limit: limit,
        })

        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPages: totalPages,
            courses: rows
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

const createNewCourses = async (data) => {
    try {
        await db.Courses.create(data);
    } catch (e) {
        console.log(e);
    }
}

const updateCourses = async (data) => {
    try {
        let user = await db.Courses.findOne({
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

const deleteCourses = async (id) => {
    try {
        let courses = await db.Courses.findOne({
            where: { id: id }
        })

        if (courses) {
            await courses.destroy();
            return {
                EM: 'Delete courses succeeds',
                EC: 0,
                DT: []
            }
        } else {
            return {
                EM: 'Courses not exist',
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
    getAllCourses,
    getCoursesWithPagination,
    createNewCourses,
    updateCourses,
    deleteCourses,
}