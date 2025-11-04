
import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(6, "O nome é obrigatório"),
  price: z.number({
      error: "O preço é obrigatório", 
  }).positive("O preço deve ser positivo"),
  description: z.string().min(5, "A descrição precisa ter ao menos 8 caracteres"),
  category: z.string().min(7, "A categoria precisa ter ao menos 7 caracteres"),
  img_url: z.string().url("A URL da imagem deve ser válida").optional(),
});



