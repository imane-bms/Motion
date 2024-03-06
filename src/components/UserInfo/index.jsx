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

const UserInfo = (/*{ onEditingMode }*/) => {
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

  const navigate = useNavigate();
  const handleEditing = () => {
    // onEditingMode; // set editing mode to true
    navigate("/user/me/edit");
  };

  return (
    <UserInfoContainer>
      <UserInfoFaceBlock>
        <Image src={jennifer} alt="avatar" />
        <h2>Jennifer Smith</h2>
        <p>Berlin, Germany</p>
        {/* when clicking on the btn, change path */}

        <SimpleButton onClick={handleEditing}> EDIT PROFILE</SimpleButton>
      </UserInfoFaceBlock>

      <UserInfoDetailsBlock>
        <UpperRightDiv>
          <section>
            <h4>About</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              nostrum velit error quisquam. Vel quas fugiat sequi alias
              praesentium animi
            </p>

            <ContactsDiv>
              <div>
                <h4>Email</h4>
                <p>jennifersmith@gmail.com</p>
              </div>
              <div>
                <h4>Phone</h4>
                <p>123-456-7890</p>
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
