const path=require('path');
const express=require('express');
const shopController=require('../controllers/admin');
const router=express.Router();
router.get('/add-product',adminController.getAddProduct);
router.get('/products',shopController.getProducts);
router.get('/add-product',adminController.getAddProduct);
router.get('/edit-product/:productId',adminController.getEditProduct);
module.exports=router;