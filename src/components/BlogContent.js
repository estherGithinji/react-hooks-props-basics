import React from "react";

function BlogContent(props) {
  return <div id="blog-content">{props.articleText}{props.isPublished}{props.minutesRead}</div>;
}

export default BlogContent;
