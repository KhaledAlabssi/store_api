import Product from "../model/product.js"

const getProducts = async (req, res) => {
    let products = await Product.find(req.query)
    // products = products.map(i => {
    //     const { name, price } = i;
    //     return {name, price}
    // })
    
  res
    .status(200)
    .json({ success: true, nbHits: products.length, data: products })
}

export { getProducts }
