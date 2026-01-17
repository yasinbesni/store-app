import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



export default function ProductCart({ product }) { 

    return (
        <Card >
            <CardActionArea>
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
                <CardActions sx={{ display: "flex",justifyContent:"space-between"}}>
                    <IconButton>
                        <FavoriteBorderIcon/>
                        <FavoriteIcon />  
                    </IconButton>
                    <Button size="small">Add to Cart</Button>
                </CardActions>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}