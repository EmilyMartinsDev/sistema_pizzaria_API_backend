import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/createUserController";
import {AuthUserController} from './controllers/user/authUserController'
import { DatailUserController } from "./controllers/user/DatailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DatailOrderController } from "./controllers/order/DatailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";


import uploadConfig from './config/multer'


const upload = multer(uploadConfig.upload('./tmp'))

const router = Router();

// rotas user

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get ('/me', isAuthenticated, new DatailUserController().handle)

// rotas category
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get ('/category',isAuthenticated, new ListCategoryController().handle )

// rotas products
router.post('/product', isAuthenticated,upload.single('file'), new CreateProductController().handle)
router.get ('/category/product', isAuthenticated, new ListByCategoryController().handle)

// rotas order
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.post ('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrderController().handle)
router.get('/order/datail', isAuthenticated, new DatailOrderController().handle)
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)
export {router}