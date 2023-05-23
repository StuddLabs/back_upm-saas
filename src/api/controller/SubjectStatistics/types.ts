import { z } from "zod";

export const up_sub_input_values_schema = z.object({
    moodle: z.number(),
    participation: z.number(),
    testI: z.number(),
    testII: z.number()
})
export type up_sub_input_values_type = z.infer<typeof up_sub_input_values_schema>;