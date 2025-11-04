import { prisma } from "../models/clientModel";
import { ProductDTO } from "../types/productDto";

export class ProductRepository {

  async create(data:ProductDTO) {
    return prisma.product.create({ data });
  }

  async findByName(name: string): Promise<ProductDTO[]> {
    return prisma.product.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive", 
        },
      },
    });
  }

  async findByCategory(category: string): Promise<ProductDTO[]> {
    return prisma.product.findMany({
      where: {
        category: {
          equals: category,
          mode: "insensitive",
        },
      },
    });
  }
   async findByImage(url: string): Promise<ProductDTO | null> {
  return prisma.product.findFirst({
    where: { image_url: url },
  });
}


  async findById(id: number) {
    return prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<ProductDTO>) {
    return prisma.product.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.product.delete({ where: { id } });
  }

  async upsert(product: any) {
    const existing = await prisma.product.findFirst({
      where: { external_id: product.external_id },
    });

    if (existing) {
      return prisma.product.update({
        where: { id: existing.id },
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category,
          image_url: product.img_url,
          external_id: product.external_id,
        },
      });
    } else {
      return prisma.product.create({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category,
          image_url: product.img_url,
          external_id: product.external_id,
        },
      });
    }
  }
}
