import { z } from "zod";

export const subject_input_values_schema = z.object({
    title: z.string(),
    prefix: z.string(),
    percent: z.number(),
    amount: z.number(),
    act_done: z.number(),
    act_alert: z.number(),
    act_todo: z.number(),
    act_finished: z.number(),
    act_total: z.number(),
    avg_moodle: z.number(),
    avg_tests: z.number(),
    avg_total: z.number(),
})
export type subject_input_values_type = z.infer<typeof subject_input_values_schema>;