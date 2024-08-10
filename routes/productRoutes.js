import express from "express";
import {
    createProductController, updateProductController, getProductController,
    getSingleProductController,
    productPhotoController,
    deleteProductController,
    productFiltersController,
    productCountController,
    productListController,
    searchProductController,
    realtedProductController,
    productCategoryController,
    braintreeTokenController,
    brainTreePaymentController
} from "../controllers/productController.js";
import { isAdmin, requireSignin } from "../middleware/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
    "/create-product",
    requireSignin,
    isAdmin,
    formidable(),
    createProductController
);
// //routes
router.put(
    "/update-product/:pid",
    requireSignin,
    isAdmin,
    formidable(),
    updateProductController
);
//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);
//filter-product
router.post('/product-filters', productFiltersController)
router.get('/product-count', productCountController)
router.get('/search/:keyword', searchProductController)
router.get("/product-list/:page", productListController);
router.get("/related-product/:pid/:cid", realtedProductController);
router.get("/product-category/:slug", productCategoryController);
router.get("/braintree/token", braintreeTokenController);
router.post("/braintree/payment", requireSignin, brainTreePaymentController);

export default router;