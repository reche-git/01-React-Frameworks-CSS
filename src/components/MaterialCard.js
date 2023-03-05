import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IMG from "../assets/favicon.png";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, m: "auto" }}>
      <CardMedia sx={{ height: 140 }} image={IMG} title="Hawaiian Fox" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Animals
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Foxes are small to medium-sized, omnivorous mammals belonging to
          several genera of the family Canidae. They have a flattened skull,
          upright, triangular ears, a pointed, slightly upturned snout, and a
          long bushy tail (or brush).
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
