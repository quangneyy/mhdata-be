import db from '../models/index';

const getAllLesson = async () => {
    try {
        let lesson = await db.Lesson.findAll();
        if (lesson) {
            return {
                EM: 'get data success',
                EC: 0,
                DT: lesson
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

const getLessonWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.Lesson.findAndCountAll({
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

const createNewLesson = async (data) => {
    try {
        await db.Lesson.create(data);
    } catch (e) {
        console.log(e);
    }
}

const updateLesson = async (data) => {
    try {
        let user = await db.Lesson.findOne({
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

const deleteLesson = async (id) => {
    try {
        await db.Lesson.delete({
            where: { id: id }
        })

    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getAllLesson,
    getLessonWithPagination,
    createNewLesson,
    updateLesson,
    deleteLesson
}