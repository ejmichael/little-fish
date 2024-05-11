import { Product } from '../data/products';

export const filterProducts = (products: Product[], category: string, maxPrice: number): Product[] => {
    return products.filter((product) => {
        const matchesCategory = category === '' || (Array.isArray(product.tags) && product.tags.includes(category.toLowerCase()));
        const matchesPrice = maxPrice === 0 || product.productPrice <= maxPrice;
        return matchesCategory && matchesPrice;
    });
};
