

const getProducts = async(req, res) => {
    
    res.status(200).json({success: true, data: "products"})
}

export {getProducts}