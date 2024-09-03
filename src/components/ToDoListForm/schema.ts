import * as z from 'zod';

export const schema = z.object({
  task: z.string().min(3),
  category: z.string().min(1),
  isComplete: z.boolean(),
})

export type ToDoListData = z.infer<typeof schema>;