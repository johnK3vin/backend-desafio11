import { userModel } from './users.models.js';

class UserManagerDAO {
    async find(limit, page) {
        let query = {};  
        let options = {
            limit: parseInt(limit) || 10,
            page: parseInt(page) || 1
        };
        return await userModel.paginate(query, options);
    
    }

    async findById(id) { 
        return await userModel.findById(id);
    }
    
    async create(userData) {
        return await userModel.create(userData);
    }

    async updateById(id, userData) {
        return await userModel.findOneAndUpdate({ id: id }, userData, { new: true });
    }

    async deleteById(id) {
        return await userModel.findByIdAndDelete(id);
    }
    async findByEmail(email) {
        console.log(email)
        return await userModel.findOne({ email: email });
    }
    
    async deleteByEmail(email) {
        return await userModel.findOneAndDelete({ email: email });
    }
}

export const userManager = new UserManagerDAO();