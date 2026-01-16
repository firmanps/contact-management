import { z } from 'zod';
import { UserBaseSchema } from './user-base.schema';

export const UpdateUserschema = UserBaseSchema.pick({
  username: true,
  password: true,
  name: true,
}).partial();

export type UpdateUserDto = z.infer<typeof UpdateUserschema>;
