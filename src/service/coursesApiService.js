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

module.exports = {
    getAllCourses,
    getCoursesWithPagination,
}