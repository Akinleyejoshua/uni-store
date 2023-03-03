import db from '../../../lib/db';
import Order from '../../../models/Order';


const updateIfNotEmpty = async (id, name, val) => {
    if (val === "" || val === undefined || val === null) return;
    await Order.updateOne({ _id: id, [name]: val }).lean();
}

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
                const {
                    id,
                    fname,
                    lname,
                    email,
                    phone,
                    companyName,
                    country,
                    region,
                    city,
                    status,
                    shipping,
                } = req.body;

                const orderExist = await Order.findOne({
                    _id: id,
                }).lean();

                if (orderExist) {

                    const fields = [];

                    if (fields.includes("")) {
                        return res.status(200).json({
                            message: "Required Fields ",
                            error: true,
                            value: "empty-fields",
                        });

                    } else {
                        await updateIfNotEmpty(id, "fname", fname)
                        await updateIfNotEmpty(id, "lname", lname)
                        await updateIfNotEmpty(id, "status", status)
                        await updateIfNotEmpty(id, "shipping", shipping)

                        res.status(201).json({
                            message: "Order updated",
                            error: false,
                            value: "order-updated"
                        })
                    }

                } else {
                    return res.status(200).json({
                        message: "order does not exist",
                        error: true,
                        value: "order-does-not-exist"
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