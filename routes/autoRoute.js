import express from 'express';
import {
    registerController, loginController, testController, updateProfileController, getOrdersController,
    getAllOrdersController,
    orderStatusController,
} from '../controllers/authController.js'
import { isAdmin, requireSignin } from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/register', registerController);
router.post('/login', loginController);
router.get('/test', requireSignin, isAdmin, testController);
router.get('/user-auth', requireSignin, (req, res) => {
    res.status(200).send({ ok: true })
})
router.get('/admin-auth', requireSignin, isAdmin, (req, res) => {
    res.status(200).send({ ok: true })
})
router.put("/profile", requireSignin, updateProfileController);


//orders
router.get("/orders", requireSignin, getOrdersController);

//all orders
router.get("/all-orders", requireSignin, isAdmin, getAllOrdersController);

// order status update
router.put(
    "/order-status/:orderId",
    requireSignin,
    isAdmin,
    orderStatusController
);
export default router;