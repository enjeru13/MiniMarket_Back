import { z } from "zod";

export const createProductSchema = z.object({
    name: z.string({
        required_error: 'El Nombre es requerido'
    }),
    stock: z.number({
        required_error: 'La Cantidad es requerida'
    }),
    price: z.number({
        required_error: 'El Precio es requerida'
    }),
    photo: z.string().optional(),
    category: z.mongoose.Schema.Types.ObjectId({
        required_error: 'La Categoria es requerida'
    })
})