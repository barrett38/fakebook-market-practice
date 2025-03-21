import React from "react";
import "./styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Marketplace</h2>
      <input
        type="text"
        placeholder="Search Marketplace"
        className="search-bar"
      />
      <ul>
        <li>Browse All</li>
        <li>Notifications</li>
        <li>Inbox</li>
        <li>Buying</li>
        <li>Selling</li>
      </ul>
      <button className="create-listing-btn">+ Create New Listing</button>
    </div>
  );
};

export default Sidebar;
