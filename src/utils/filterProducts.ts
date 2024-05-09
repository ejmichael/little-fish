import { Product } from '../data/products';

export const filterProducts = (products: Product[], category: string): Product[] => {
    if(!category) {
        return products
    }

    return products.filter((product) => {
        return Array.isArray(product.tags) && product.tags.includes(category);
    })
}
