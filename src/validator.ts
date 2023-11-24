import z from "zod";

export const sortScheme = z.enum(["NONE", "ASC", "DESC"]);

export const productDataScheme = z.array(
  z.object({ name: z.string(), rate: z.number() })
); // should be used once connected to backend
