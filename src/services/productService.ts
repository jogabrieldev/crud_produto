import { ProductRepository } from "../repositories/productRepository"
import { ProductDTO } from "../types/productDto"
const productRepository = new ProductRepository()

export const serviceRegisterProduct = async (data:ProductDTO) => {

 try{
      if(!data || data===null){
        throw new Error("Não há dados paa registrar o produto")
      }

     return await productRepository.create(data)
 }catch(err){
   throw new Error("Erro ao registrar o produto")
 }

}

export const serviceUpdateProduct = async (id: number, data: Partial<ProductDTO>) => {
  try {
    if (!id || !data) {
      throw new Error("ID ou dados inválidos para atualização");
    }

    const updated = await productRepository.update(id, data);
     return updated as ProductDTO;
  } catch (err) {
    throw new Error("Erro ao atualizar o produto");
  }
};

export const serviceDeleteProduct = async (id: number) => {
  try {
    if (!id) {
      throw new Error("ID inválido para exclusão");
    }

    return await productRepository.delete(id);
  } catch (err:any) {
    throw new Error("Erro ao deletar o produto");
  }
};

export const serviceFindProductById = async (id: number) => {
  try {
    if (!id) {
      throw new Error("ID inválido para busca");
    }

    return await productRepository.findById(id);
  } catch (err) {
    throw new Error("Erro ao buscar produto por ID");
  }
};

export const serviceFindProductByName = async (name: string) => {
  try {
    if (!name) {
      throw new Error("Nome inválido para busca");
    }

    return await productRepository.findByName(name);
  } catch (err:any) {
    throw new Error(`Erro ao buscar produtos por nome: ${err.message}`);
  }
};

export const serviceFindProductByCategory = async (category: string) => {
  try {
    if (!category) {
      throw new Error("Categoria inválida para busca");
    }

    return await productRepository.findByCategory(category);
  } catch (err:any) {
    throw new Error(`Erro ao buscar produtos por categoria: ${err.message}`);
  }
};

export const serviceFindProductByImage = async (url: string) => {
  try {
    return await productRepository.findByImage(url);
  } catch (err) {
    throw new Error("Erro ao buscar produto pela URL da imagem");
  }
};

