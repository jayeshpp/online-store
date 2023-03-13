import { Skeleton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ProductShimmer() {
  return (
    <Card sx={{ minWidth: 275, marginBottom: '12px' }} className=''>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
        <Skeleton/>
        </Typography>
        <Typography variant="h5" component="div">
        <Skeleton/>
        </Typography>
      </CardContent>
    </Card>
  );
}

export function ProductShimmers({count = 20}) {
  return Array.from(Array(count).keys()).map((_, index) => <ProductShimmer key={index} />)
}