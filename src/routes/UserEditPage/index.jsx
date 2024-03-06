import { Container, Cover, TopDiv } from "./styles";
import coverBg from "../../assets/images/coverBg.png";
import { SmallTopDiv } from "./styles";
import camera from "../../assets/images/camera.png";
import { Image } from "./styles";
import UserEdit from "../../components/UserEdit";
const UserEditPage = () => {
  return (
    <Container>
      <Cover src={coverBg} alt="cover-bg" />
      <SmallTopDiv>
        <Image src={camera} />
        <p>Update image</p>
      </SmallTopDiv>
      <TopDiv>
        <UserEdit />
      </TopDiv>
    </Container>
  );
};

export default UserEditPage;
