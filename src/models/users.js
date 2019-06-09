import usersdata from '../data/userData';
import uuid from 'uuid';
import moment from 'moment';

class UserModel {
    constructor() {
        this.users = usersdata;
    }

    /**
     * @param {Object} data
     * @returns {Object}
     */
    create(data) {
        const newUser = {
            id: uuid.v4(),
            email: data.email || '',
            first_name: data.first_name || '',
            last_name: data.last_name || '',
            password: data.password || '',
            address: data.address || '',
            isAdmin: data.isAdmin || false,
            phone: data.phone || '',
        };
        this.users.push(newUser);
        return newUser;
    }

    getAllUsers() {
        return this.users;
    }

    /**
     * @param {Number} userid
     * @param {String} newPassword - new hashed password
     * @returns {Object}
     */
    changePassword(userid, newPassword) {
        const user = this.getUser(userid);
        user.password = newPassword || user.password;
        return user;
    }

    /**
     * @description - get a user
     * @param {Number} userid
     * @returns {Object}
     */
    getUser(userid) {
        return this.users.find(user => user.id === parseInt(userid, 10));
    }


    /**
     * @param {Number}
     * @returns {Object}
     */
    makeUserAdmin(userId) {
        const user = this.getUser(userId);
        user.isAdmin = true;
        return user;
    }
}

export default new UserModel();