import { BaseDiv } from "../../../styles";

function SinglePost(post) {
  return (
    <BaseDiv>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
    </BaseDiv>
  );
}

export default SinglePost;
