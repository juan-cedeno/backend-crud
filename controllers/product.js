const { request, response } = require("express");
const { find } = require("../model/product");
const Product = require("../model/product")


const createProduct = async (req = request , res = response) => {

    const {name , price} = req.body

    try {
        let product = await Product.findOne({name})

        if(product) {
            return res.status(401).json({
                ok : false,
                message : 'There is already a product with that name'
            })

        }

        product = new Product(req.body)

        await product.save()

        res.status(200).json({
            ok : true,
            id : product.id,
            name : product.name,
            price : product.price
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok : false,
            message : 'Comunicarse con soporte tecnico'
        })
    }

}

const getProduct = async (req = request  , res = response) => {

    try {
        const product = await Product.find()

        res.status(200).json({
            ok : true,
            product
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok : false,
            message : 'Comunicarse con soporte tecnico'
        })
    }
}

const deleteProduct = async (req = request , res = response) => {

    const {id} = req.params

    try {
        const idProduct = await Product.findById(id)

        if(!idProduct) {
            return res.status(404).json({
                ok : false,
                message : 'id not found'
            })
        }

        await Product.findByIdAndDelete(id)
        res.status(200).json({
            ok : true,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok : false,
            message : 'Comunicarse con soporte tecnico'
        })
    }
}

const editProduct = async (req = request , res = response) => {
    try {
        const {id} = req.params
        const {name} = req.body
        const productId = await Product.findById(id)

        if(!productId){
            return res.status(404).json({
                ok : false,
                message : 'No id'
            })
        }

        const product = {
            ...req.body
        }
        
        const productUpdate = await Product.findByIdAndUpdate(id , product , {new :  true})

        res.status(200).json({
            ok : true,
            productUpdate
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok : false,
            message : 'Comunicarse con soporte tecnico'
        })
    }

}

module.exports = {
    createProduct,
    getProduct,
    deleteProduct,
    editProduct
}