import { z } from "zod";

export const up_act_input_values_schema = z.object({
    point: z.number(),
    sendDate: z.string(),
    status: z.string()
})
export type up_act_input_values_type = z.infer<typeof up_act_input_values_schema>;