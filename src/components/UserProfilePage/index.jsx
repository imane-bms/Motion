import { Cover, UserSectionContainer } from "./styles";

import PostsList from "../Posts/PostsList";
import UserInfo from "../UserInfo";
import { useParams } from "react-router-dom";

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
        {userID !== "me" ? (
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
