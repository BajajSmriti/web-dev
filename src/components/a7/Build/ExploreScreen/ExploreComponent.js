import React from "react";
import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
  return (
    <>
      <i className="fas fa-cog fa-2x"></i>
      <div className="wd-search">
        <i className="fas fa-search"></i>
        <input type="search" className="wd-search-input" placeholder="Search Twitter" />
      </div>
      <ul className="nav mb-2 mt-2 nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="/foryou">For you</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/trending">Trending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/news">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sports">Sports</a>
        </li>
        <li className="nav-item d-none d-md-block">
          <a className="nav-link" href="/entertainment">Entertainment</a>
        </li>
      </ul>
      <ul className="list-group mb-2">
        <li className="list-group-item wd-starship">
          <img src="../../Images/starship.jpg" alt="starship" className="wd-topic-heading-image img-responsive" />
          <h3 className="carousel-caption">SpaceX's Starship </h3>
        </li>
      </ul>
      {PostSummaryList()}
    </>
  );
}
export default ExploreComponent;

