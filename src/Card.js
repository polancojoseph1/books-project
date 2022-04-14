import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  let { description, name, author, image, year } = props.book
  console.log(props)
  return (
    <Card sx={{ maxWidth: 300 }} className="card">
      <CardMedia
        src={ image }
        component="img"
        height="140"
        // image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { name }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { description }
        </Typography>
      </CardContent>
      <CardActions>
        <div size="small">{ author }</div>
        <div size="small">{ year }</div>
      </CardActions>
    </Card>
  );
}