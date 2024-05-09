import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    require_error: "Username es requerido",
  }),
  email: z
    .string({
      require_error: "email es requerido",
    })
    .email({
      message: "email invalido",
    }),
  password: z
    .string({
      require_error: "password es requerido",
    })
    .min(6, {
      message: "el password debe tener minimo 6 caracteres",
    }),
});

export const loginSchema = z.object({
  username: z.string({
    require_error: "Username es requerido",
  }),
  password: z
    .string({
      require_error: "password es requerido",
    })
    .min(6, {
      message: "el password debe tener minimo 6 caracteres",
    }),
});
