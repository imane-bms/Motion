import { useNavigate, useParams } from "react-router-dom";
import { SimpleButton } from "../../styles";

import { useDispatch, useSelector } from "react-redux";
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

import { useEffect, useState } from "react";
import { UserInfoContainer } from "../../routes/UserProfilePage/styles";
import { selectProfile, updateprofile } from "../../store/slices/profileSlice";
import { getMyUserDatas, getUserDatas } from "../../axios";

// still working on it
const UserInfo = ({ userID }) => {
  const [isLoggedInUser, setIsLoggedInUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState([]);
  useEffect(() => {
    userID === "me" ? setIsLoggedInUser(true) : setIsLoggedInUser(false);
  }, [userID]);

  // ------------------------------------ fetch user data based on isLoggedIn ----------------------------------------

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = isLoggedInUser
          ? await getMyUserDatas()
          : await getUserDatas(userID);
        // console.log(data);
        setCurrentUserData(data);

        dispatch(updateprofile(data));
        // dispatch this userData to  Redux store here if needed??
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  // -----------------------------------------Get Data from the store afetr editing --------------------------------------
  const { ...userData } = useSelector(selectProfile);

  //assign an empty array if currentUserData.things_user_likes is undefined
  const hobbies = currentUserData.things_user_likes || [];
  // const hobbies = currentUserData.things_user_likes;

  //to check if the user is the one logged in
  // const [isCurrentUser, setIsCurrentUser] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const statistics = useSelector((state) => [
    { title: "Posts", value: state.stats.posts },
    { title: "Likes", value: state.stats.likes },
    { title: "Friends", value: state.stats.friends },
    { title: "Followers", value: state.stats.followers },
    { title: "Following", value: state.stats.following },
  ]);

  //----- need to think how to update hobbies when user edits them------
  // const hobbies = currentUserData.things_user_likes;

  const handleEditing = () => {
    navigate("/user/edit");
  };

  return (
    <UserInfoContainer>
      <UserInfoFaceBlock>
        <Image
          src={isLoggedInUser ? jennifer : currentUserData.avatar}
          alt="avatar"
        />
        <h2>
          {currentUserData.first_name} {currentUserData.last_name}
        </h2>
        <p>{userData.location}</p>
        {/* Render the "Edit Profile" button only if canEdit is true */}
        {isLoggedInUser && (
          <SimpleButton onClick={handleEditing}> EDIT PROFILE</SimpleButton>
        )}
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
              {hobbies.length > 0 ? (
                hobbies.map((hobby, index) => (
                  <Hobbie key={index}>{hobby}</Hobbie>
                ))
              ) : (
                <p></p>
              )}
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
