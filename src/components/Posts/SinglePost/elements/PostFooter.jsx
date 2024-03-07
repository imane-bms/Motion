import share from "../../../../assets/svgs/share.svg";
import heart from "../../../../assets/svgs/heart.svg";
import { NumberOfLikes, PostButton, PostFooterContainer } from "../styles";

// eslint-disable-next-line react/prop-types
function PostFooter({ likes }) {
  return (
    <PostFooterContainer>
      <PostButton>
        <img src={heart} /> Like
      </PostButton>
      <PostButton>
        <img src={share} /> Share
      </PostButton>

      <NumberOfLikes>{likes} likes</NumberOfLikes>
    </PostFooterContainer>
  );
}

export default PostFooter;
