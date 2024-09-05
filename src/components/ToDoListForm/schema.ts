import * as z from 'zod';

export const schema = z.object({
  task: z.string().min(3),
  categoryId: z.string().min(1),
  isCompleted: z.boolean(),
})

export type ToDoListData = z.infer<typeof schema>;

