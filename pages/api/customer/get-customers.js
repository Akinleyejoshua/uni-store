import db from '../../../lib/db';
import Customer from '../../../models/Customers';

export default async function handler(req, res) {
    const { method } = req

    await db()

    switch (method) {
        case 'GET':
            try {
                const customers = await Customer.find().lean();
                res.status(200).send(customers);
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {


            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}