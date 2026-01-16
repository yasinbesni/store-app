import { Grid } from "@mui/material";
import ProductCart from "./ProductCart";

export default function ProductsList({ products }) { 
    return (
        <Grid container spacing={2}>
            {products.map((product) => (
        <Grid  key={product.id} size={{ xs: 6, sm: 6, md: 4, lg: 3}} item>
                   <ProductCart product={product} />
        </Grid>
      ))}
        </Grid>
    )
}