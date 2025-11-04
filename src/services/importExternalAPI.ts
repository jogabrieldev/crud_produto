import axios from "axios";
import { ProductRepository } from "../repositories/productRepository";
import { ProductDTO } from "../types/productDto";

const productRepository = new ProductRepository();

export const importProducts = async (): Promise<void> => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");

    const products: ProductDTO[] = response.data.map((p: any) => ({
      external_id: p.id,       
      name: p.title,
      description: p.description,
      price: p.price,
      category: p.category,
      img_url: p.image,
    }));

    await Promise.all(products.map((p) => productRepository.upsert(p)));

    console.log("Produtos importados com sucesso!");
  } catch (error) {
    console.error("Error importing products:", error);
  }
};


// Para rodar diretamente no Node.js ou dentro do container Docker
// importProducts();

