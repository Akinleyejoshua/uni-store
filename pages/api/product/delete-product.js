import db from '../../../lib/db';
import Product from '../../../models/Product';

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
                console.log(id)

                const deleteProduct = await Product.deleteOne(id).lean();
                
                if(deleteProduct){
                    res.json({
                        message: "Product deleted",
                        error: false,
                        value: "Product-deleted"
                    })
                } else {
                    res.json({
                        message: "Product does not exist",
                        error: false,
                        value: "Product-not-exist"
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