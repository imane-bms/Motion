import { Cover, UserSectionContainer } from "./styles";
import { useParams } from "react-router-dom";
import PostsList from "../Posts/PostsList";
import UserInfo from "../UserInfo";

// import { useEffect, useState } from "react";
const UserProfilePage = () => {
  const { userID } = useParams();

  
  return (
    <>
      <Cover />
      <UserSectionContainer>
       
        <UserInfo userID={userID}/>
      </UserSectionContainer>
      <PostsList />
    </>
  );
};

export default UserProfilePage;
