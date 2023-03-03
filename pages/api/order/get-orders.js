import db from '../../../lib/db';
import Order from '../../../models/Order';

export default async function handler(req, res) {
    const { method } = req

    await db()

    switch (method) {
        case 'GET':
            try {
                const orders = await Order.find();
                return res.status(200).send(orders);

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
        default:
            res.status(400).json({ success: false })
            break
    }
}