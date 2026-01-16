import { z } from 'zod';
import { UserBaseSchema } from './user-base.schema';

export const LoginUserSchema = UserBaseSchema.pick({
  username: true,
  password: true,
});

export type LoginUserDto = z.infer<typeof LoginUserSchema>;
