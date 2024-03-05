import { Container, Cover, TopDiv } from "./styles";
import coverBg from "../../assets/images/coverBg.png";

import { useNavigate } from "react-router-dom";
import PostsList from "../Posts/PostsList";
import UserInfo from "../UserInfo";
const UserProfilePage = () => {
  const navigate = useNavigate();
  const handleEditing = () => {
    // onEditingMode; // set editing mode to true
    navigate("/user/me/edit");
  };
  return (
    <Container>
      <Cover src={coverBg} alt="cover-bg" />
      <TopDiv>
        <UserInfo onEditingMode={handleEditing} />
      </TopDiv>
      <PostsList />
    </Container>
  );
};

export default UserProfilePage;
