import db from '../../../lib/db';
import Product from '../../../models/Product';


const updateIfNotEmpty = async (id, name, val) => {
    if (val === "" || val === undefined || val === null) return;
    return await Product.findOneAndUpdate({ _id: id }, { [name]: val }).lean();
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



                const productExist = await Product.findOne({
                    _id: id,
                }).lean();

                if (productExist) {


                    const fields = [id, name, regularPrice, type,];

                    // const fields = [productExist._id, productExist.name, productExist.regularPrice, productExist.type, productExist.image];
                    if (fields.includes("")) {
                        return res.status(200).json({
                            message: "Required Fields - ID, name, regular price & product type",
                            error: true,
                            value: "empty-fields",
                        })
                    } else {
                        await updateIfNotEmpty(id, "name", name);
                        await updateIfNotEmpty(id, "category", category);
                        await updateIfNotEmpty(id, "description", description);
                        await updateIfNotEmpty(id, "type", type);
                        await updateIfNotEmpty(id, "virtual", virtual);
                        await updateIfNotEmpty(id, "downloadable", downloadable);
                        await updateIfNotEmpty(id, "regularPrice", regularPrice);
                        await updateIfNotEmpty(id, "salePrice", salePrice);
                        await updateIfNotEmpty(id, "visibility", visibility);
                        await updateIfNotEmpty(id, "image", image);
                        await updateIfNotEmpty(id, "tags", tags);
                        await updateIfNotEmpty(id, "sku", sku);
                        await updateIfNotEmpty(id, "stockStatus", stockStatus);
                        await updateIfNotEmpty(id, "soldIndividually", soldIndividualy);
                        await updateIfNotEmpty(id, "shortDescription", shortDescription);
                        await updateIfNotEmpty(id, "date", date);

                        return res.status(201).json({
                            message: "Product Updated",
                            error: false,
                            value: "product-updated"
                        })
                    }

                } else {
                    return res.status(200).json({
                        message: "Product does not exist",
                        error: true,
                        value: "product-does-not-exist"
                    })
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