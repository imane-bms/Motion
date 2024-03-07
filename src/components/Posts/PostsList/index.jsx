import { useEffect, useState } from "react";
import { fetchPosts } from "../../../axios";

import { SectionContainer } from "../../../styles";
import { PostsContainer } from "../styles";

import NewPostForm from "../NewPostForm";
import SinglePost from "../SinglePost";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// eslint-disable-next-line react/prop-types
function PostsList({ canAddPosts = true }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts({ limit: 12, offset: 0 });
      setPosts(data.results);
      console.log(data.results);
    };

    loadPosts();
  }, []);

  return (
    <SectionContainer>
      <PostsContainer>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
          <Masonry gutter="2rem">
            {canAddPosts && <NewPostForm />}
            {posts.map((post) => (
              <SinglePost key={post.id} {...post} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </PostsContainer>
    </SectionContainer>
  );
}

export default PostsList;
