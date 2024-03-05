import { NumberOfLikes, PostButton, PostFooterContainer } from "../styles";
import share from "../../../../assets/svgs/share.svg";
import heart from "../../../../assets/svgs/heart.svg";

function PostFooter() {
  return (
    <PostFooterContainer>
      <PostButton>
        <img src={heart} /> Like
      </PostButton>
      <PostButton>
        <img src={share} /> Share
      </PostButton>

      <NumberOfLikes>2 likes</NumberOfLikes>
    </PostFooterContainer>
  );
}

export default PostFooter;
