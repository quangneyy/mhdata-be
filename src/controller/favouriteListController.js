import favouriteListApiService from '../service/favouriteListApiService';

const readFunc = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;

            let data = await favouriteListApiService.getFavouriteListWithPagination(+page, +limit);
            return res.status(200).json({
                EM: data.EM, // error message
                EC: data.EC, // error code
                DT: data.DT, //data
            })
        } else {
            let data = await favouriteListApiService.getAllFavouriteList();
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

const createFunc = async (req, res) => {
    try {
        // validate 
        let data = await favouriteListApiService.createNewFavouriteList(req.body);
        return res.status(200).json({
            EM: data.EM, // error message
            EC: data.EC, // error code 
            DT: data.DT, // data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', //error code 
            DT: '', // date
        })
    }
}

const deleteFunc = async (req, res) => {
    try {
        let data = await favouriteListApiService.deleteFavouriteList(req.body.id);
        return res.status(200).json({
            EM: data.EM, // error message
            EC: data.EC, // error code
            DT: data.DT, // data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', //error code 
            DT: '', // date
        })
    }
}

module.exports = {
    readFunc,
    createFunc,
    deleteFunc,
}