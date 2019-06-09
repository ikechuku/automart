import uuid from 'uuid';
import moment from 'moment';

class OrderModel {
    constructor() {
        this.orders = [];
    }

    /**
     * @description - create a new order
     * @param {Object} data
     * @returns {Object}
     */
    createOrder(data) {
        const newOrder = {
            id: uuid.v4(),
            buyerId: data.buyerId,
            carId: data.carId,
            sellerId: data.sellerId,
            price: data.price || 0,
            status: data.status || 'pending',
            date: moment.now(),
        };
        this.orders.push(newOrder);
        return newOrder;
    }

    /**
     * @param {Number} orderId
     * @param {Number} newPrice
     * @returns {Object}
     */
    updateOrderPrice(orderId, newPrice) {
        const order = this.getSingleOrder(orderId);
        order.priceOffered = parseFloat(newPrice);
        return order;
    }

    /**
     * @param {Number} orderId
     * @returns {Object}
     */
    getOrder(orderId) {
        return this.orders.find(order => parseInt(order.id, 10) === parseInt(orderId, 10));
    }
}
export default new OrderModel();