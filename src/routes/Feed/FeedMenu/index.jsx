import { FeedMenuContainer, FeedMenuLink, SearchForm } from "./styles";

function FeedMenu() {
  return (
    <FeedMenuContainer>
      <form>
        <SearchForm type="text" name="post-search" placeholder="Search" />
      </form>
      <FeedMenuLink>All </FeedMenuLink>
      <FeedMenuLink>Liked</FeedMenuLink>
      <FeedMenuLink>Friends</FeedMenuLink>
      <FeedMenuLink>Follow</FeedMenuLink>
    </FeedMenuContainer>
  );
}

export default FeedMenu;
