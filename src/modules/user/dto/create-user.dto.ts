import { z } from 'zod';
import { UserBaseSchema } from './user-base.schema';
export const CreateUserSchema = UserBaseSchema;

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
