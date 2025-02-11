import { Router } from "express";
import BaseRoutes from "./baseroutes";

const router = Router();

router.use("/customer",BaseRoutes);

export default router;
