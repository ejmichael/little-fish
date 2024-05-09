import WhiteEarbuds from '../assets/product-images/white-earbuds.jpg';
import AppleWatch from '../assets/product-images/apple-watch.jpg';
import HighSpecDrone from '../assets/product-images/big-drone.jpg';
import CameraStand from '../assets/product-images/camera stand.jpg';
import CameraLenses from '../assets/product-images/camera-lense.jpg';
import DroneRemote from '../assets/product-images/drown-remote.jpg';
import GameBoy from '../assets/product-images/game boy.jpg';
import BlackGoldHeadphones from '../assets/product-images/gold-headphones.jpg';
import BlackHeadphones from '../assets/product-images/high-quality-earphones.jpg';
import HighSpecCamera from '../assets/product-images/high-spec-camera.jpg';
import HighSpecCamera2 from '../assets/product-images/high-spec-camera-2.jpg';
import XboxController from '../assets/product-images/white-xbox-controller.jpg';
import DesktopCamera from '../assets/product-images/mini-desktop-camera.jpg';
import PS4Controller from '../assets/product-images/navy-ps4-controller.jpg';
import PSP from '../assets/product-images/psp.jpg';
import MiniDrone from '../assets/product-images/mini-desktop-camera.jpg';

// Define the `Product` type or import it from a types file
export interface Product {
    id: string;
    productName: string;
    productPrice: number;
    productDescription?: string;
    stockQty?: number;
    colors?: string[];
    imgSource?: string; // URL or path for the product image
    qty?: number;
    tags?: string[]; // New property for tags or categories
}

// Sample product data
const products: Product[] = [
    {
        id: "1",
        productName: "Apple Watch",
        productPrice: 399.00,
        productDescription: "Stylish smartwatch with health and fitness tracking features.",
        stockQty: 50,
        colors: ["space gray", "silver", "gold"],
        imgSource: AppleWatch,
        tags: ["smartwatches", "wearables", "electronics"]
    },
    {
        id: "2",
        productName: "High Spec Drone",
        productPrice: 999.00,
        productDescription: "High-performance drone with 4K camera and advanced flight control.",
        stockQty: 20,
        colors: ["black", "white"],
        imgSource: HighSpecDrone,
        tags: ["drones", "electronics", "photography"]
    },
    {
        id: "3",
        productName: "Camera Stand with Auto Stabilization",
        productPrice: 120.00,
        productDescription: "Camera stand with auto-stabilization technology for smooth video capture.",
        stockQty: 75,
        colors: ["black"],
        imgSource: CameraStand,
        tags: ["photography", "camera accessories"]
    },
    {
        id: "4",
        productName: "Camera Lenses",
        productPrice: 350.00,
        productDescription: "Set of high-quality camera lenses for professional photography.",
        stockQty: 30,
        colors: ["black"],
        imgSource: CameraLenses,
        tags: ["photography", "camera accessories"]
    },
    {
        id: "5",
        productName: "Drone Remote",
        productPrice: 150.00,
        productDescription: "Remote control for drone with easy-to-use interface and long-range connectivity.",
        stockQty: 100,
        colors: ["gray"],
        imgSource: DroneRemote,
        tags: ["drone accessories", "electronics"]
    },
    {
        id: "6",
        productName: "Game Boy",
        productPrice: 75.00,
        productDescription: "Classic handheld gaming console with a library of timeless games.",
        stockQty: 40,
        colors: ["gray", "red"],
        imgSource: GameBoy,
        tags: ["gaming", "retro"]
    },
    {
        id: "7",
        productName: "High-Quality Black and Gold Headphones",
        productPrice: 250.00,
        productDescription: "Premium black and gold headphones with excellent sound quality and comfort.",
        stockQty: 25,
        colors: ["black", "gold"],
        imgSource: BlackGoldHeadphones,
        tags: ["audio", "headphones", "premium"]
    },
    {
        id: "8",
        productName: "High-Quality Black Headphones",
        productPrice: 220.00,
        productDescription: "High-quality black headphones with crisp sound and comfortable fit.",
        stockQty: 50,
        colors: ["black"],
        imgSource: BlackHeadphones,
        tags: ["audio", "headphones"]
    },
    {
        id: "9",
        productName: "Kodak 2000 Camera",
        productPrice: 1200.00,
        productDescription: "Advanced camera with high-resolution capabilities and customizable settings.",
        stockQty: 15,
        colors: ["black"],
        imgSource: HighSpecCamera,
        tags: ["photography", "cameras"]
    },
    {
        id: "10",
        productName: "Cannon H800 Camera",
        productPrice: 1100.00,
        productDescription: "Another advanced camera with excellent image quality and features.",
        stockQty: 20,
        colors: ["black"],
        imgSource: HighSpecCamera2,
        tags: ["photography", "cameras"]
    },
    {
        id: "11",
        productName: "Mini Desktop Camera",
        productPrice: 99.00,
        productDescription: "Compact desktop camera for easy video calls and streaming.",
        stockQty: 60,
        colors: ["black", "white"],
        imgSource: DesktopCamera,
        tags: ["electronics", "webcams"]
    },
    {
        id: "12",
        productName: "Navy PS4 Controller",
        productPrice: 59.00,
        productDescription: "Stylish navy blue PS4 controller with precise control and comfortable grip.",
        stockQty: 50,
        colors: ["navy blue"],
        imgSource: PS4Controller,
        tags: ["gaming", "controllers"]
    },
    {
        id: "13",
        productName: "PSP",
        productPrice: 199.00,
        productDescription: "Portable gaming console with a wide selection of games.",
        stockQty: 30,
        colors: ["black"],
        imgSource: PSP,
        tags: ["gaming", "portables"]
    },
    {
        id: "14",
        productName: "Mini Red and Black Drone",
        productPrice: 80.00,
        productDescription: "Small drone with red and black color scheme, perfect for beginners.",
        stockQty: 100,
        colors: ["red", "black"],
        imgSource: MiniDrone,
        tags: ["drones", "electronics"]
    },
    {
        id: "15",
        productName: "White Earbuds",
        productPrice: 59.00,
        productDescription: "High-quality white earbuds with great sound and comfortable fit.",
        stockQty: 70,
        colors: ["white"],
        imgSource: WhiteEarbuds,
        tags: ["audio", "earbuds"]
    },
    {
        id: "16",
        productName: "Xbox Controller",
        productPrice: 59.00,
        productDescription: "White Xbox controller with ergonomic design and responsive buttons.",
        stockQty: 50,
        colors: ["white"],
        imgSource: XboxController,
        tags: ["gaming", "controllers"]
    }
];

// Export the array of products so they can be used elsewhere in the application
export default products;
