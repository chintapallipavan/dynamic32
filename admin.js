const product=require('../models/product');
exports.getAddProduct=(req,res,next)=>  {
    res.render('admin/add-product',{
        pageTitle:'Add Product',
        path:'admin/add-product',
        formsCSS:true,
        productCSS:true,
        activeaddProduct:true
    });
}
exports.postAddProduct=(req,res,next) =>{
    const title=req.body.title;
    const imageUrl=req.body.imageUrl;
    const price=req.body.price;
    const description=req.body.description;
    const product=new product(title,imageUrl,description,price);
    product.save();
    res.redirect('/');
};
exports.getDeleteProducts=(req,res,next)=>{
    const editMode=req.query.edit;
    if(!editMode){
        return res.redirect('/');
    }
    
            res.render('admin/delete-product',
            {
               
                pageTitle:'Add Products',
                path:'/admin/add-products',
                delete:deleteMode

            });

        }