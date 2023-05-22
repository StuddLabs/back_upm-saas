import { z } from "zod";

export const activity_input_values_schema = z.object({
    title: z.string(),
    point: z.number(),
    mode: z.string(),
    type: z.string(),
    sendDate: z.string(),
    endDate: z.string(),
    status: z.string(),
    link: z.string()
})
export type activity_input_values_type = z.infer<typeof activity_input_values_schema>;