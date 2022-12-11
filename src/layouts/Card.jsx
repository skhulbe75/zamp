import * as React from "react";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import "../index.css";

const SingleCard = ({ multi }) => {
  const {
    name,
    category,
    brand,
    color,
    image,
    price,
    discount,
    popularity,
    rating,
    trending,
    recommended,
    realprice,
  } = multi;

  const starIcon = (
    <StarIcon
      sx={{
        fontSize: "18px",
        transform: "translate(0, 20%)",
        marginRight: "2px",
        color: "#14958f",
      }}
    />
  );

  return (
    <Card sx={{ maxWidth: 345 }} className="singleCard">
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt="green screen"
      />
      <CardContent>
        <span
          style={{
            position: "absolute",
            bottom: "35%",
            left: "4px",
            background: "rgba(243, 253, 253, 0.8)",
            padding: "5px",
            margin: "5px",
            borderRadius: "4px",
          }}
        >
          {rating} {starIcon} | {popularity}
        </span>
        <Typography
          variant="h6"
          component="span"
          style={{ textTransform: "capitalize" }}
        >
          {` ${name}-${category} @ ${brand}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`The best piece of printed ${name}`}.
        </Typography>

        <Typography variant="span">
          <strong>Rs. {price}</strong>{" "}
          <strike style={{ opacity: 0.5, fontSize: "13px" }}>
            Rs.{realprice}
          </strike>{" "}
          <span style={{ color: "rgb(255,174,122)" }}>({discount}% OFF)</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleCard;
