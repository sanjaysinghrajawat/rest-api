const Product = require('../models/products')

exports.getAllProducts = async (req, res) => {

    const allProducts = await Product.find({})
    return res.status(200).json(allProducts)
};

exports.getProductWithQuery = async (req, res) => {

    const { company, name, rating, sort, select } = req.query;
    const queryObj = {}
    if (company) {
        queryObj.company = company;
    }
    if (name) {
        queryObj.name = { $regex: name, $options: "i" };    // search by name
    }
    if (rating) {
        queryObj.rating = rating;
    }

    let apiResult = Product.find(queryObj);
    if (sort) {
        let sortFix = sort.replace(",", " ");
        apiResult = apiResult.sort(sortFix);
    }
    if (select) {
        let selectFix = select.split(",").join(" ");
        apiResult = apiResult.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit;
    if(page || limit){
        apiResult = apiResult.skip(skip).limit(limit);
    }

    try {
        const products = await apiResult;
        return res.status(200).json({products, nbHits: products.length});
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.createProduct = async (req, res) => {
    const { name, price, company } = req.body;
    console.log(name, price, company)

    if (!name || !price || !company) {
        return res.status(400).json({
            success: false,
            error: "Something is missing"
        })
    }

    const productCreared = new Product({
        name, price, company
    });

    await productCreared.save();

    return res.status(201).json({
        success: true,
        message: "Product Created Successfully"
    })
}