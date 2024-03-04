import { BaseDiv, SectionContainer } from "../../styles";
import FeedMenu from "./FeedMenu";

function Feed() {
  return (
    <div>
      <FeedMenu />

      <SectionContainer>
        <BaseDiv>
          <h3>Post Title</h3>
        </BaseDiv>
      </SectionContainer>
      
    </div>
  );
}

export default Feed;
