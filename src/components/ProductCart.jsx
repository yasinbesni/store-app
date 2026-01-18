import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { formatPrice } from "../utils/format";
import { Link } from "react-router-dom";

export default function ProductCart({ product }) {
  return (
    <Card>
      {/* Tıklanabilir alan: BUTON YOK */}
      <CardActionArea component={Link} to={`/products/${product.id}`}>
        <CardMedia
          component="img"
          height="380"
          image={`http://localhost:5000/images/${product.image}`}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="primary.dark">
            {product.title}
          </Typography>

          <Typography variant="body1" color="secondary.dark">
            {formatPrice.format(product.price)}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* Butonlar: CardActionArea DIŞINDA */}
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          onClick={() => console.log("toggle favorite", product.id)}
          aria-label="add to favorites"
        >
          <FavoriteBorderIcon />
          {/* favori ise bunu göster: <FavoriteIcon /> */}
        </IconButton>

        <Button
          size="small"
          onClick={() => console.log("add to cart", product.id)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
