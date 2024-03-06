import { Cover, UserSectionContainer } from "./styles";
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
    <>
      <Cover />
      <UserSectionContainer>
        <UserInfo onEditingMode={handleEditing} />
      </UserSectionContainer>
      <PostsList />
    </>
  );
};

export default UserProfilePage;
