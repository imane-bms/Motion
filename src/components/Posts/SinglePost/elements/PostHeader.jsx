import formatDate from "./renderDate";
import { PostHeaderContainer, PostUserAvatar } from "../styles";

// eslint-disable-next-line react/prop-types
function PostHeader({ avatar, name, time }) {
  return (
    <PostHeaderContainer>
      <div>
        <PostUserAvatar src={avatar} alt="testUser" />
      </div>
      <div>
        <h4>{name}</h4>
        {formatDate(time)}
      </div>
    </PostHeaderContainer>
  );
}

export default PostHeader;
