import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";

export default function ProductDetailPage() { 
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(null);
    useEffect(() => {
  let cancelled = false;

  async function fetchProductDetails() {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      if (!cancelled) setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      if (!cancelled) setLoading(false);
    }
  }

  fetchProductDetails();
  return () => { cancelled = true; };
}, [id]);

    console.log("Product State:", product);
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <>
           <ProductItem product={product} />
        </>
    )
}