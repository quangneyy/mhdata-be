import db from '../models/index';

const getAllStorageDetail = async () => {
    try {
        let storageDetail = await db.StorageDetail.findAll();
        if (storageDetail) {
            return {
                EM: 'get data success',
                EC: 0,
                DT: storageDetail
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

const getStorageDetailWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.StorageDetail.findAndCountAll({
            offset: offset,
            limit: limit,
        })

        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPages: totalPages,
            storageDetail: rows
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

const createNewStorageDetail = async (data) => {
    try {
        await db.StorageDetail.create(data);
    } catch (e) {
        console.log(e);
    }
}

const deleteStorageDetail = async (id) => {
    try {
        let storageDetail = await db.StorageDetail.findOne({
            where: { id: id }
        })

        if (storageDetail) {
            await storageDetail.destroy();
            return {
                EM: 'Delete storageDetail succeeds',
                EC: 0,
                DT: []
            }
        } else {
            return {
                EM: 'StorageDetail not exist',
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
    getAllStorageDetail,
    getStorageDetailWithPagination,
    createNewStorageDetail,
    deleteStorageDetail,
}