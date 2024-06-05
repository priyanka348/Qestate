import React, { useState, useEffect } from "react";
import "./FeaturedListing.css";
import axios from "axios";
import config from "../../config";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import './FeaturedListing.css';

export default function FeaturedListing() {
  const [listingsData, setListingsData] = useState([]);

  async function fetchListings() {
    try {
      const response = await axios.get(
        `${config.backendEndpoint}/real-estate-data`
      );
      const data = response.data.listings;
      setListingsData(data.slice(0, 8));
    } catch (err) {
      setListingsData([]);
      console.log(err);
    }
  }

  useEffect(() => {
    fetchListings();
  }, []);
  return (
    <Box sx={{ width: 100 % "" }}>
    <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {listingsData.length === 0 ? (
    <Grid item>
      <div className="error-message">
        <p>No Featured Listings Found!</p>
      </div>
    </Grid>
    ) : (
        listingsData.map((ele,index)=>(
            <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={`/assets/real-estate-${index}.jpg`}
                alt="green iguana"
              />
              <CardContent>
                <Typography className='property-name' gutterBottom variant="h5" component="div">
                 {ele.property_name.slice(0,6)}
                </Typography>
              </CardContent>
              <CardActions> 
                <div className="listing-detail">
                    <span className="property-price">Rs {ele.price}</span>
                    <span className="property-city">{ele.city.slice(0,5)}</span>
                </div>
              </CardActions>
            </CardActionArea>
          </Card>
          </Grid>
        ))
    )}
    </Grid>
    </Box>
  );
}
