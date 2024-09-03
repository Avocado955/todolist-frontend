import * as z from 'zod';

export const schema = z.object({
  categoryName: z.string().min(1),
})

export type CategoryData = z.infer<typeof schema>;