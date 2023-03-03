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
                const {
                    fname,
                    lname,
                    companyName,
                    country,
                    streetAddress,
                    apartmentSuit,
                    city,
                    state,
                    phone,
                    email,
                    products,
                    date,
                    shipping,
                    category,
                    downloadable,
                    cost,
                    quantity,
                    total,
                    coupon,
                    notes,
                    orderNumber,
                    paymentMethod,
                    status,
                } = req.body;

                const fields = [
                    fname,
                    lname,
                    country,
                    streetAddress,
                    city,
                    state,
                    phone,
                    email,
                ]

                if (fields.includes("")) {
                    return res.status(200).json({
                        message: "All fields are required",
                        error: true,
                        value: "empty-fields"
                    })
                } else {
                    // const random = Math.floor(Math.random() * 1000000);

                    const newOrder = await Order({
                        // date: localDate(),
                        date,
                        orderNumber,
                        fname,
                        lname,
                        companyName,
                        country,
                        streetAddress,
                        apartmentSuit,
                        city,
                        state,
                        phone,
                        email,
                        products,
                        shipping,
                        category,
                        downloadable,
                        cost,
                        quantity,
                        total,
                        coupon,
                        notes,
                        paymentMethod,
                        status,
                    });

                    if (newOrder.save()) {
                        return res.status(201).json({
                            message: "Order placed",
                            error: false,
                            value: "order-created"
                        })
                    }
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