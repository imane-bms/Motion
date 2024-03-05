import { BaseArticle } from "../../../styles";
import PostFooter from "./elements/PostFooter";
import PostHeader from "./elements/PostHeader";

function SinglePost(post) {
  return (
    <BaseArticle>
      <PostHeader />
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <PostFooter />
    </BaseArticle>
  );
}

export default SinglePost;
