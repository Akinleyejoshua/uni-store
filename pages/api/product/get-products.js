import db from '../../../lib/db';
import Product from '../../../models/Product';

export default async function handler (req, res) {
  const { method } = req

  await db()

  switch (method) {
    case 'GET':
      try {
        const { id, category, tags } = req.query;
        // console.log(category, tags)
    
        if (![category, tags].includes(undefined)) {
            const products = await Product.find({
                category: category
            }).lean();
            return res.status(200).send(products);
    
        } else if (![category].includes(undefined)) {
            const products = await Product.find({
                category: category
            }).lean();
            return res.status(200).send(products);
    
        } else if (![tags].includes(undefined)) {
            const products = await Product.find({
                tags: tags
            }).lean();
            return res.status(200).send(products);
    
        } else if (![id].includes(undefined)) {
            const products = await Product.find({
                _id: id
            }).lean();
            return res.status(200).send(products);
        } else {
            const products = await Product.find();
            return res.status(200).send(products);
        }
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const {
            name,
            description,
            type,
            virtual,
            downloadable,
            regularPrice,
            salePrice,
            visibility,
            image,
            category,
            tags,
            sku,
            stockStatus,
            soldIndividualy,
            shortDescription,
            date,
        } = req.body;
    
        const fields = [name, regularPrice, type];
    
        if (fields.includes("")) {
            return res.status(200).json({
                message: "All fields are required",
                error: true,
                value: "empty-fields",
            })
        } else {
            const productExist = await Product.findOne({
                name,
                description,
                type,
                virtual,
                downloadable,
                regularPrice,
                salePrice,
                visibility,
                image,
                category,
                tags,
                sku,
                stockStatus,
                soldIndividualy,
                shortDescription,
                date,
            }).lean();
    
            if (!productExist) {
                const newProduct = await Product({
                    name,
                    description,
                    type,
                    virtual,
                    downloadable,
                    regularPrice,
                    salePrice,
                    visibility,
                    image,
                    category,
                    tags,
                    sku,
                    stockStatus,
                    soldIndividualy,
                    shortDescription,
                    date,
                });
    
                if (newProduct.save()) {
                    res.status(201).json({
                        message: "Product added",
                        error: false,
                        value: "product-added"
                    })
                }
    
            } else {
                return res.status(200).json({
                    message: "Product already exist",
                    error: true,
                    value: "product-exist"
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