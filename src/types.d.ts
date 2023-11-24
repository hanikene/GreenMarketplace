import z from "zod";
import { productDataScheme, sortScheme } from "./validator";

export type SortTypes = z.infer<typeof sortScheme>;
export type ProductData = z.infer<typeof productDataScheme>; // should be used once connected to backend
