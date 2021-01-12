const express = require('express')
const {validatecamp} = require('../middleware/validate-camp')
const { check } = require('express-validator')
const { createProduct, getProduct , deleteProduct , editProduct} = require('../controllers/product')

const router = express.Router()


router.post('/product' ,
[
    check('name' , 'name is required').not().isEmpty(),
    check('price' , 'Price is required').not().isEmpty(),
    validatecamp
]
 , createProduct)

 router.get('/product' , getProduct)

 router.delete('/product/:id' , deleteProduct)

 router.put('/product/:id' , editProduct)

 module.exports = router