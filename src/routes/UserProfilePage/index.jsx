import { Cover, UserSectionContainer } from "./styles";
import { useParams } from "react-router-dom";
// import UserInfo from "../UserInfo";
import PostsList from "../../components/Posts/PostsList";
import UserInfo from "../../components/UserInfo";

// import { useEffect, useState } from "react";
const UserProfilePage = () => {
  const { userID } = useParams();

  return (
    <>
      <Cover />
      <UserSectionContainer>
        <UserInfo userID={userID} />
      </UserSectionContainer>
      <PostsList />
    </>
  );
};

export default UserProfilePage;
