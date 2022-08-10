import db from '../models/index';

const getAllCoursesDetail = async () => {
    try {
        let courses = await db.CoursesDetail.findAll();
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

const getCoursesDetailWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.CoursesDetail.findAndCountAll({
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

const createNewCoursesDetail = async (data) => {
    try {
        await db.CoursesDetail.create(data);
    } catch (e) {
        console.log(e);
    }
}

const updateCoursesDetail = async (data) => {
    try {
        let user = await db.CoursesDetail.findOne({
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

const deleteCoursesDetail = async (id) => {
    try {
        let courses = await db.CoursesDetail.findOne({
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
    getAllCoursesDetail,
    getCoursesDetailWithPagination,
    createNewCoursesDetail,
    updateCoursesDetail,
    deleteCoursesDetail,
}