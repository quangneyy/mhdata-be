import db from '../models/index';

const getAllFavouriteList = async () => {
    try {
        let favouriteList = await db.FavouriteList.findAll(
            // {
            //     attributes: ["id", "name", "author", "time", "image", "dateUpload"],
            //     include: { model: db.Category, attributes: ["id", "name"] },
            // }
        );
        if (favouriteList) {
            return {
                EM: 'get data success',
                EC: 0,
                DT: favouriteList
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

const getFavouriteListWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.FavouriteList.findAndCountAll({
            offset: offset,
            limit: limit,
        })

        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPages: totalPages,
            favouriteList: rows
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

const createNewFavouriteList = async (data) => {
    try {
        await db.FavouriteList.create(data);
    } catch (e) {
        console.log(e);
    }
}

const deleteFavouriteList = async (id) => {
    try {
        let favouriteList = await db.FavouriteList.findOne({
            where: { id: id }
        })

        if (favouriteList) {
            await favouriteList.destroy();
            return {
                EM: 'Delete favouriteList succeeds',
                EC: 0,
                DT: []
            }
        } else {
            return {
                EM: 'FavouriteList not exist',
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
    getAllFavouriteList,
    getFavouriteListWithPagination,
    createNewFavouriteList,
    deleteFavouriteList,
}