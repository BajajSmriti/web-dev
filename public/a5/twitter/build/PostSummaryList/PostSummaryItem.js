const PostSummaryItem = (posts) => {
    var innerHtml = ''
    if (`${posts.topic}`!=''){
        innerHtml= `<a href="#" class="wd-topic-topicname">${posts.topic}</a><br/>`
    }
    return (`
    <li class="list-group-item">
            <img src=${posts.image} class="wd-topic-img" />
            ${innerHtml}
            <a href="#" class="wd-topic-heading">${posts.userName} </a><i class="fa fa-check-circle"></i>
            <span class="wd-topic-time"> - ${posts.time}</span><br/>
            <span class="wd-topic-description">${posts.title}</span>
    </li>
    `);
}
export default PostSummaryItem;

