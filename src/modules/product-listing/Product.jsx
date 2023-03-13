import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function Product(product) {
  return (
    <Card sx={{ minWidth: 275, marginBottom: '12px' }} data-testid='product'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
        {product.book_author.join(" ")}
        </Typography>
        <Typography variant="h5" component="div">
          {product.book_publication_city}
        </Typography>
      </CardContent>
    </Card>
  );
}
