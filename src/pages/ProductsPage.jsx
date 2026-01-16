import { useEffect, useState } from "react"
import ProductsList from "../components/ProductsList";

export default function ProductsPage() { 
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchProducts() {
            try {
                setIsLoading(true);
                const response = await fetch('http://localhost:5000/products');
                const data = await response.json();
                console.log("Fetched products:", data);
                setLoadedProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
            finally {
                // Any cleanup or final steps can go here
                setIsLoading(false);
            }
        }
        fetchProducts();
    }, []);
    if (isLoading) {
        return <div>Loading products...</div>;
    }
    return (
        <ProductsList products={loadedProducts} />
    )
}
