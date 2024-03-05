import { useNavigate } from "react-router-dom";
import { SimpleButton } from "../../styles";

import { useSelector } from "react-redux";
import StatsCard from "../Stats";
import {
  AboutDiv,
  ContactsDiv,
  HobbiesDiv,
  Image,
  LeftFlexColDiv,
  RightDivContainer,
  SmallDivWithShadow,
  SmallFlexDiv,
  Stats,
  UpperRightDiv,
} from "./styles";

import jennifer from "../../assets/images/users/jennifer.png";

const UserInfo = ({ onEditingMode }) => {
  const statistics = useSelector((state) => [
    { title: "Posts", value: state.stats.posts },
    { title: "Likes", value: state.stats.likes },
    { title: "Friends", value: state.stats.friends },
    { title: "Followers", value: state.stats.followers },
    { title: "Following", value: state.stats.following },
  ]);

  const navigate = useNavigate();
  const handleEditing = () => {
    onEditingMode(); // set editing mode to true
    navigate("/user/me/edit");
  };

  return (
    <SmallDivWithShadow>
      <LeftFlexColDiv>
        <Image src={jennifer} alt="avatar" />
        <h2>Jennifer Smith</h2>
        <p>Berlin, Germany</p>
        {/* when clicking on the btn, change path */}

        <SimpleButton onClick={handleEditing}> EDIT PROFILE</SimpleButton>
      </LeftFlexColDiv>

      <RightDivContainer>
        <UpperRightDiv>
          <AboutDiv>
            <p>About</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              nostrum velit error quisquam. Vel quas fugiat sequi alias
              praesentium animi
            </p>
          </AboutDiv>
          <HobbiesDiv>
            <p>Things I Like </p>
            <SmallFlexDiv>
              <p>somehting</p>
              <p>somehting</p>
              <p>somehting</p>
              <p>somehting</p>
              <p>somehting</p>
              <p>somehting</p>
            </SmallFlexDiv>
          </HobbiesDiv>
        </UpperRightDiv>

        {/* hobbies from store? */}

        <ContactsDiv>
          <div>
            <p>Email</p>
            <p>jennifersmith@gmail.com</p>
          </div>
          <div>
            <p>Phone</p>
            <p>123-456-7890</p>
          </div>
        </ContactsDiv>
        <Stats>
          {statistics.map((statistic, index) => (
            <StatsCard
              key={index}
              title={statistic.title}
              value={statistic.value}
            />
          ))}
        </Stats>
      </RightDivContainer>
    </SmallDivWithShadow>
  );
};

export default UserInfo;
