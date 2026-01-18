import { Grid, Paper, Typography } from "@mui/material";

export default function ProductItem({ product }) {
    if (!product) return null;
    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={{ lg: 4, md: 5, sm: 6, xs: 12 }}>
                    <Paper variant="outlined" sx={{ p: 3 }}>
                        <img src={"http://localhost:5000/images/"+product.image} alt={product.title} style={{width:"100%"}} />
                    </Paper>
                </Grid>
                <Grid size={{ lg: 8, md: 7, sm: 6, xs: 12 }}>
                   <Paper variant="outlined" sx={{ p: 3 }}>
                        <Typography component="h1" variant="h4" color="secondary.dark">
                            {product.title}
                        </Typography>
                        <Typography variant="body1" color="srcondary.dark">
                            {product.description}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            ${product.price}
                        </Typography>
                   </Paper>
                </Grid>
            </Grid>
        </div>
    );  
}