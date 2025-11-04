
import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export const validate = (schema: ZodSchema) => {

  return (req: Request, res: Response, next: NextFunction) => {
    try {

      const parsedBody = schema.parse(req.body);
      req.body = parsedBody;
      next();

    } catch (error) {
  
      if (error instanceof ZodError) {
      
        const errors = error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));

        return res.status(400).json({
          message: "Erro de validação",
          errors: errors,
        });
      }

      console.error("Erro desconhecido no middleware de validação:", error);
      return res.status(500).json({
        message: "Erro interno do servidor.",
      });
    }
  };
};
