import { BaseArticle } from "../../../styles";

import PostFooter from "./elements/PostFooter";
import PostHeader from "./elements/PostHeader";

import { renderImages } from "./elements/renderImages";

function SinglePost(post) {
  return (
    <BaseArticle>
      <PostHeader
        name={post.user.first_name + " " + post.user.last_name}
        time={post.created}
        avatar={post.user.avatar}
      />
      <p>{post.content}</p>
      {renderImages(post.images)}
      <PostFooter likes={post.amount_of_likes} />
    </BaseArticle>
  );
}

export default SinglePost;
