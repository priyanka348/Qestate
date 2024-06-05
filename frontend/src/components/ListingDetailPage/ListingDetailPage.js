import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import config from "../../config";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ListingDetailPage.css";
export default function ListingDetailPage() {
  const [property, setProperty] = useState(null);

  const { property_id } = useParams();

  const fetchListings = async () => {
    try {
      const response = await axios.get(
        `${config.backendEndpoint}/real-estate-data`
      );
      const data = response.data.listings;

      setProperty(data.find((ele) => ele.property_id === Number(property_id)));
    } catch (err) {
      setProperty(null);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);
  return (
    <>
      <Header />
      <div className="detail-page-container">
        {property ? (
          <>
            <div className="image-container">
              <img
                src="/assets/real-estate-detail.jpg"
                alt="real-estate-detail-img"
              />
            </div>
            <div className="property-details">
              <h1>{property.property_name}</h1>
              <div className="property-description">
                {property.description} In irure aliqua ipsum elit pariatur ex
                dolor est mollit eu duis dolor commodo. Elit ad excepteur est
                cillum duis aliqua adipisicing incididunt dolore. Dolor labore
                dolore eu nulla est cillum occaecat. Pariatur anim sit non
                consectetur sunt fugiat excepteur anim magna anim. Irure culpa
                eu ipsum incididunt laboris ullamco ea laboris dolor. Sit ea
                magna laboris esse sint consequat sunt minim ullamco non magna
                irure. Aliquip pariatur labore non nostrud fugiat.
              </div>
            <div className="agent-details">
              <h2 className="agent-details-header">Contact</h2>
              <div className="agent-details-content">
                 <span className="title">Agent Name:</span>
                 <span>John Smith</span>
                 <span className="title">Email:</span>
                 <span>johnsmith@gmail.com</span>
              </div>
            </div>
           </div>
           
          </>
        ) : (
          <div>Details Unavailable at the moment</div>
        )}
      </div>
    </>
  );
}
