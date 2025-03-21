import React from "react";
import Sidebar from "./Sidebar";
import ListingCard from "./ListingCard";
import "./styles.css";

const listings = [
  {
    id: 1,
    title: "2018 Infiniti Q50 3.0t LUXE Sedan 4D",
    price: "$6,100",
    location: "Nashville, TN",
    miles: "120K miles",
    img: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "2015 Cadillac Escalade Luxury Sport Utility 4D",
    price: "$20,000",
    location: "Antioch, TN",
    miles: "115K miles",
    img: "https://via.placeholder.com/300x200",
  },
];

const Marketplace = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h2>Today's Picks</h2>
        <div className="listings">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
