import { Request, Response } from "express";
import * as productService from "../services/productService"


export const createProductController = async (req: Request, res: Response) => {
  try {
     const data = req.body;
     const newProduct = await productService.serviceRegisterProduct(data)
     if(newProduct)return res.status(201).json({message:"Produto criado com sucesso", product:newProduct})
  } catch (err: any) {
    return res.status(500).json({error:err.message})
  }
};

export const updateProductController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body;

    const updated = await productService.serviceUpdateProduct(id, data);
    return res
      .status(200)
      .json({ message: "Produto atualizado com sucesso", product: updated });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await productService.serviceDeleteProduct(id);

    return res.status(200).json({ message: "Produto deletado com sucesso" });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const findProductByIdController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const product = await productService.serviceFindProductById(id);

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    return res.status(200).json(product);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const findProductaByNameController = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ message: "Informe o nome para busca" });
    }

    const products = await productService.serviceFindProductByName(name as string);
    return res.status(200).json(products);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const findProductByCategoryController = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;

    if (!category) {
      return res.status(400).json({ message: "Informe a categoria para busca" });
    }

    const products = await productService.serviceFindProductByCategory(category as string);
    return res.status(200).json(products);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const findProductByImageController = async (req: Request, res: Response) => {
  try {
    const { url } = req.query;

    if (!url || typeof url !== "string") {
      return res.status(400).json({ message: "Informe a URL da imagem no parâmetro 'url'" });
    }

    const product = await productService.serviceFindProductByImage(url);

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado para a URL informada" });
    }

    return res.status(200).json(product);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

