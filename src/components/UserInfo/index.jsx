import { useNavigate } from "react-router-dom";
import { SimpleButton } from "../../styles";

import { useSelector } from "react-redux";
import StatsCard from "../Stats";
import {
  ContactsDiv,
  Hobbie,
  HobbiesDiv,
  Image,
  Stats,
  UpperRightDiv,
  UserInfoDetailsBlock,
  UserInfoFaceBlock,
} from "./styles";

import jennifer from "../../assets/images/users/jennifer.png";
import { UserInfoContainer } from "../UserProfilePage/styles";
import UserAxios from "../../axios";
import { useEffect, useState } from "react";

const UserInfo = () => {
  //store current user's data
  const [currentUserData, setCurrentUserData] = useState([]);

  const statistics = useSelector((state) => [
    { title: "Posts", value: state.stats.posts },
    { title: "Likes", value: state.stats.likes },
    { title: "Friends", value: state.stats.friends },
    { title: "Followers", value: state.stats.followers },
    { title: "Following", value: state.stats.following },
  ]);

  const hobbies = [
    { id: 1, name: "hiking" },
    { id: 2, name: "coding" },
    { id: 3, name: "reading" },
    { id: 4, name: "gardening" },
    { id: 5, name: "cooking" },
    { id: 6, name: "gaming" },
    { id: 7, name: "painting" },
  ];
  //hhh
  //----- need to think how to update hobbies when user edits them------
  // const hobbies = currentUserData.things_user_likes;

  const navigate = useNavigate();
  const handleEditing = () => {
    navigate("/user/me/edit");
  };

  // function to fetch user data from API
  const getUserMeData = async (token) => {
    try {
      const response = await UserAxios.get("/users/me/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = response.data;
      setCurrentUserData(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserMeData(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5OTAwODA4LCJpYXQiOjE3MDk3MjgwMDgsImp0aSI6ImE2NGRkOTVmZTUzNTQxZTY4NmMyZDkzMTBjY2ZjYThkIiwidXNlcl9pZCI6MzM4Nn0.cIn4WsmKWB8yl425xgW5GFGAJLK_k9lyyYzJMpMFdY4"
    );
  }, []);
  useEffect(() => {
    console.log(currentUserData);
  }, [currentUserData]);

  return (
    <UserInfoContainer>
      <UserInfoFaceBlock>
        <Image src={jennifer} alt="avatar" />
        <h2>
          {currentUserData.first_name} {currentUserData.last_name}
        </h2>
        <p>{currentUserData.location}</p>
        {/* Render the "Edit Profile" button only if canEdit is true */}
        {/* {canEdit && ( */}
        <SimpleButton onClick={handleEditing}> EDIT PROFILE</SimpleButton>
        {/*  )} */}
      </UserInfoFaceBlock>

      <UserInfoDetailsBlock>
        <UpperRightDiv>
          <section>
            <h4>About</h4>
            <p>{currentUserData.about_me}</p>

            <ContactsDiv>
              <div>
                <h4>Email</h4>
                <p>{currentUserData.email}</p>
              </div>
              <div>
                <h4>Phone</h4>
                <p>{currentUserData.phone_number}</p>
              </div>
            </ContactsDiv>
          </section>
          <div>
            <h4>Things I Like </h4>
            <HobbiesDiv>
              {hobbies.map((hobby) => (
                <Hobbie key={hobby.id}>{hobby.name}</Hobbie>
              ))}
            </HobbiesDiv>
          </div>
        </UpperRightDiv>

        {/* hobbies from store? */}
        {/* think how to update the stats */}
        <Stats>
          {statistics.map((statistic, index) => (
            <StatsCard
              key={index}
              title={statistic.title}
              value={statistic.value}
            />
          ))}
        </Stats>
      </UserInfoDetailsBlock>
    </UserInfoContainer>
  );
};

export default UserInfo;
