import { z } from "zod";

export const init_input_values_schema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
})
export type init_input_values_type = z.infer<typeof init_input_values_schema>;