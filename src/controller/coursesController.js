import coursesApiService from '../service/coursesApiService';

const readFunc = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;

            let data = await coursesApiService.getUserWithPagination(+page, +limit);
            return res.status(200).json({
                EM: data.EM, // error message
                EC: data.EC, // error code
                DT: data.DT, //data
            })
        } else {
            let data = await coursesApiService.getAllCourses();
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

module.exports = {
    readFunc
}