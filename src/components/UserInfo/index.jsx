import { Link } from "react-router-dom";
import { SimpleButton } from "../../styles";
import DivWithShadow from "../../styles/divs";

const UserInfo = () => {
  return (
    <DivWithShadow>
      <section className="left-profileInfo">
        <img alt="avatar" />
        <h2>User Name</h2>
        <p>City, Country</p>
        {/* when clicking on the btn, change path */}
        <Link to="userEdit">
          <SimpleButton> EDIT PROFILE</SimpleButton>
        </Link>
      </section>
      <section className="right-profileInfo">
        <div className="profileInfo">
          <div className="about">
            <p>About</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              nostrum velit error quisquam. Vel quas fugiat sequi alias
              praesentium animi fuga, debitis dolore blanditiis id ea cumque,
              nesciunt voluptatibus placeat.
            </p>
          </div>
          <div className="things-i-like">
            <p>somehting</p>
            <p>somehting</p>
            <p>somehting</p>
          </div>
          <div className="contact-email">
            <p>Email</p>
            <p>User Email</p>
          </div>
          <div className="contact-phone">
            <p>Phone</p>
            <p>User Phone</p>
          </div>
          <div className="stats">
            <div className="posts-stats">
              <p>count</p>
              <p>Posts</p>
            </div>
            <div className="likes-stats">
              <p>count</p>
              <p>Posts</p>
            </div>
            <div className="friends-stats">
              <p>count</p>
              <p>Posts</p>
            </div>
            <div className="followers-stats">
              <p>count</p>
              <p>Posts</p>
            </div>
            <div className="following-stats">
              <p>count</p>
              <p>Posts</p>
            </div>
          </div>
        </div>
      </section>
    </DivWithShadow>
  );
};

export default UserInfo;
