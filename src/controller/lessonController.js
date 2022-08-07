import lessonApiService from '../service/lessonApiService';

const readFunc = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;

            let data = await lessonApiService.getLessonWithPagination(+page, +limit);
            return res.status(200).json({
                EM: data.EM, // error message
                EC: data.EC, // error code
                DT: data.DT, //data
            })
        } else {
            let data = await lessonApiService.getAllLesson();
            return res.status(200).json({
                EM: data.EM, // error message
                EC: data.EC, // error code
                DT: data.DT, //data
            })
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', //error code 
            DT: '', // date
        })
    }
}

const createFunc = (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', //error code 
            DT: '', // date
        })
    }
}

const updateFunc = (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', //error code 
            DT: '', // date
        })
    }
}

const deleteFunc = (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', //error code 
            DT: '', // data
        })
    }
}

module.exports = {
    readFunc,
    createFunc,
    updateFunc,
    deleteFunc,
}