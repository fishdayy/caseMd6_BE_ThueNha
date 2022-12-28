import Router from "express";
import {userRouter} from "./userRouter";
import {categoryRouter} from "./categoryRouter";
import {homeRouter} from "./homeRouter";
import {imageHomeRouter} from "./imageHomeRouter";

export const router = Router()
router.use('/users',userRouter);
router.use('/categories', categoryRouter);
router.use('/homes', homeRouter);
router.use('/imageHomes', imageHomeRouter);