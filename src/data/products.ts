// Define the `Product` type or import it from a types file
export interface Product {
    id: string;
    productName: string;
    productPrice: number;
    productDescription?: string;
    colors?: string[];
    imgSource?: string; // URL or path for the product image
    qty?: number;
}

// Sample product data
const products: Product[] = [
    {
        id: "1",
        productName: "Wireless Headphones",
        productPrice: 150.00,
        productDescription: "High-quality wireless headphones with noise-canceling technology and 20-hour battery life.",
        colors: ["black", "white", "blue"],
        imgSource: "/path/to/wireless_headphones.jpg"
    },
    {
        id: "2",
        productName: "Smartwatch",
        productPrice: 200.00,
        productDescription: "A sleek smartwatch with health and fitness tracking features, GPS, and a vibrant display.",
        colors: ["silver", "black", "rose gold"],
        imgSource: "/path/to/smartwatch.jpg"
    },
    {
        id: "3",
        productName: "Gaming Mouse",
        productPrice: 50.00,
        productDescription: "Ergonomic gaming mouse with customizable RGB lighting and programmable buttons.",
        colors: ["red", "green", "blue"],
        imgSource: "/path/to/gaming_mouse.jpg"
    },
    {
        id: "4",
        productName: "Laptop Bag",
        productPrice: 75.00,
        productDescription: "Durable laptop bag with multiple compartments and padded shoulder strap for comfortable carrying.",
        colors: ["black", "gray", "navy"],
        imgSource: "/path/to/laptop_bag.jpg"
    },
    {
        id: "5",
        productName: "Bluetooth Speaker",
        productPrice: 120.00,
        productDescription: "Portable Bluetooth speaker with rich sound quality, water resistance, and long battery life.",
        colors: ["black", "white", "blue"],
        imgSource: "/path/to/bluetooth_speaker.jpg"
    }
];

// Export the array of products so they can be used elsewhere in the application
export default products;
