import { z } from 'zod';

export const UserBaseSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, 'username minimum 3 characters')
    .max(100, 'username maximum 100 characters')
    .regex(
      /^[a-zA-Z0-9_]+$/,
      'Username hanya boleh berisi huruf, angka, dan underscore',
    ),
  password: z
    .string()
    .min(8, 'password minimum 8 characters')
    .max(100, 'password maximum 100 characters'),
  name: z
    .string()
    .trim()
    .min(1)
    .max(100)
    .regex(/^[a-zA-Z0-9]+$/, 'name hanya boleh berisi huruf, angka'),
});
