import { Cover, UserSectionContainer } from "./styles";
import { useParams } from "react-router-dom";
import PostsList from "../Posts/PostsList";
import UserInfo from "../UserInfo";

// import { useEffect, useState } from "react";
const UserProfilePage = () => {
  const { userID } = useParams();

  const currentUserId = "current_user_id";
  const canEdit = currentUserId === userID;

  // const handleEditing = () => {
  //   // onEditingMode; // set editing mode to true
  //   navigate("/user/me/edit");
  // };
  return (
    <>
      <Cover />
      <UserSectionContainer>
        {/* pass prop to control if user can edit */}
        <UserInfo canEdit={canEdit} />
      </UserSectionContainer>
      <PostsList />
    </>
  );
};

export default UserProfilePage;
