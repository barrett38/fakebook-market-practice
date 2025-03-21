import React from "react";
import Sidebar from "./Sidebar";
import ListingCard from "./ListingCard";

const listings = [
  {
    id: 1,
    title: "2018 Infiniti Q50 3.0t LUXE Sedan 4D",
    price: "$6,100",
    location: "Nashville, TN",
    miles: "120K miles",
    img: "car1.jpg",
  },
  {
    id: 2,
    title: "2015 Cadillac Escalade Luxury Sport Utility 4D",
    price: "$20,000",
    location: "Antioch, TN",
    miles: "115K miles",
    img: "car2.jpg",
  },
];

const Marketplace = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <h2 className="text-xl font-bold">Today's Picks</h2>
        <div className="grid grid-cols-2 gap-4">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
