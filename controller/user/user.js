let UserModel = require('../../common/models/users/index')

module.exports = {
    getLogin,
    addUserDeatils
}

async function getLogin(req) {
    try{
        return await UserModel.getDetails(req.params.id);
    } catch(ex){
        throw ex;
    }
}

async function addUserDeatils(req) {
    try {
        return await UserModel.addUserDeatils(req.body);
    } catch(ex){
        throw ex;
    }
}