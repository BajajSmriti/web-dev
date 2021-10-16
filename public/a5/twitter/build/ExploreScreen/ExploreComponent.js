import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <!-- search field and cog -->
           <i class="fas fa-cog fa-2x"></i>            
           <div class="wd-search">
                       <i class="fas fa-search"></i>
                       <input type="search" class ="wd-search-input" placeholder="Search Twitter">
            </div> 
           <ul class="nav mb-2 mt-2 nav-tabs">
                      <!-- tabs -->
                      <li class="nav-item">
                        <a class="nav-link active" href="#">For you</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                      </li>
                      <li class="nav-item d-none d-md-block">
                        <a class="nav-link" href="#">Entertainment</a>
                      </li>
           </ul>
           <ul class="list-group mb-2">
                     <li class="list-group-item wd-starship">
                        <img src="../Images/starship.jpg" class="wd-topic-heading-image img-responsive">
                        <h3 class="carousel-caption">SpaceX's Starship </h3>
                     </li>
           </ul>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

