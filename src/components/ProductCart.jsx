import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ProductCart({ product }) { 

    return (
        <Card >
            <CardMedia
                component="img"
                height="380"
                image={`http://localhost:5000/images/${product.image}`}
                alt={product.title}
            />
            <CardContent>
                <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="primary.dark"    
                >
                {product.title}
                </Typography>
                <Typography variant="body1" color="secondary.dark">
                    {product.price}
                </Typography>
            </CardContent>
        </Card>
    )
}