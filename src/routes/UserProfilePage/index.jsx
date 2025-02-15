import { useParams } from "react-router-dom";
import { Cover, UserSectionContainer } from "./styles";
import PostsList from "../../components/Posts/PostsList";
import UserInfo from "../../components/UserInfo";

const UserProfilePage = () => {
  //extract user if from the url
  const { userID } = useParams();
  console.log(userID);
  console.log(useParams());
  console.log("hhh");

  return (
    <>
      <Cover />
      <UserSectionContainer>
        {userID !== undefined ? (
          <UserInfo userID={userID} />
        ) : (
          <UserInfo userID={"me"} />
        )}
      </UserSectionContainer>
      <PostsList />
    </>
  );
};

export default UserProfilePage;
