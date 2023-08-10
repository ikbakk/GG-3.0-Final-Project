import { Router } from "express";
import {
  addProduct,
  getProducts,
  searchProducts,
} from "../controllers/products";

const productsRouter = Router();

productsRouter.get("/:videoID", getProducts);
productsRouter.post("/:videoID", addProduct);
productsRouter.get("/:videoID/search", searchProducts);

export default productsRouter;
