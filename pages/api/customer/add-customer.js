import db from '../../../lib/db';
import Customer from '../../../models/Customers';

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

        } = req.body;

        // console.log(req.body);

        const fields = [];

        if (fields.includes("")) {
          return res.status(200).json({
            message: "Required Fields - name",
            error: true,
            value: "empty-fields",
          })
        } else {
          const customerExist = await Customer.findOne({

          }).lean();

          if (!customerExist) {
            const newCustomer = await Customer(req.body);

            if (newCustomer.save()) {
              res.status(201).json({
                message: "customer added",
                error: false,
                value: "customer-added"
              })
            }

          } else {
            return res.status(200).json({
              message: "customer already exist",
              error: true,
              value: "customer-exist"
            })
          }
        }
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