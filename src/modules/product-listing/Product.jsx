import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function Product({book_author, book_publication_city}) {
  return (
    <Card sx={{ minWidth: 275, marginBottom: '12px' }} data-testid='product'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
        {book_author.join(" ")}
        </Typography>
        <Typography variant="h5" component="div">
          {book_publication_city}
        </Typography>
      </CardContent>
    </Card>
  );
}
