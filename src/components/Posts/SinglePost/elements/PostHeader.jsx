import testUser from "../../../../assets/images/users/alber.png";
import { PostHeaderContainer } from "../styles";

function PostHeader() {
  return (
    <PostHeaderContainer>
      <div>
        <img src={testUser} alt="testUser" />
      </div>
      <div>
        <h4>User Name</h4>
        <p>time</p>
      </div>
    </PostHeaderContainer>
  );
}

export default PostHeader;
