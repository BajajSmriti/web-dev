const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item ${active==='home'?'active':''}" href="../HomeScreen/home.html">
                    <i class="fas fa-home"></i> 
                    <span class="menu-text"> Home </span>
                </a>
                <a class="list-group-item ${active==='explore'?'active':''}" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag"></i>
                    <span class="menu-text"> Explore </span> 
                </a>
                <a class="list-group-item ${active==='notifications'?'active':''}" href="/">
                    <i class="fas fa-bell"></i>  
                    <span class="menu-text"> Notifications </span>
                </a>
                <a class="list-group-item ${active==='messages'?'active':''}" href="/">
                    <i class="fas fa-envelope"></i>  
                    <span class="menu-text"> Messages </span>                   
                </a>
                <a class="list-group-item ${active==='bookmarks'?'active':''}" href="/">
                    <i class="fas fa-bookmark"></i> 
                    <span class="menu-text"> Bookmarks </span>                   
                </a>
                <a class="list-group-item ${active==='lists'?'active':''}" href="/">
                    <i class="fas fa-list"></i> 
                    <span class="menu-text"> Lists </span>
                </a>
                <a class="list-group-item ${active==='profile'?'active':''}" href="/">
                    <i class="fas fa-user"></i>  
                    <span class="menu-text"> Profile </span>                    
                </a>
                <a class="list-group-item ${active==='more'?'active':''}" href="/">
                    <i class="fas fa-ellipsis-h"></i> 
                    <span class="menu-text"> More </span>                                     
                </a>
            <!-- continue the rest of the list -->
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;

