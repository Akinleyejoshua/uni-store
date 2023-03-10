import db from '../../../lib/db';
import Order from '../../../models/Order';

export default async function handler(req, res) {
    const { method } = req

    await db()

    switch (method) {
        case 'GET':
            try {

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case "DELETE":
            try {
                const {id} = req.body;

                const deleteOrder = await Order.deleteOne(id).lean();
                
                if(deleteOrder){
                    res.json({
                        message: "Order deleted",
                        error: false,
                        value: "order-deleted"
                    })
                } else {
                    res.json({
                        message: "Order does not exist",
                        error: false,
                        value: "order-not-exist"
                    })
                }
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}