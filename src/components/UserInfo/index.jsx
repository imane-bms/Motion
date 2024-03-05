import { Link } from "react-router-dom";
import { SimpleButton } from "../../styles";
import DivWithShadow from "../../styles/divs";
import { useSelector } from "react-redux";
import StatsCard from "../Stats";

const UserInfo = () => {
  const statistics = useSelector((state) => [
    { title: "Posts", value: state.stats.posts },
    { title: "Likes", value: state.stats.likes },
    { title: "Friends", value: state.stats.friends },
    { title: "Followers", value: state.stats.followers },
    { title: "Following", value: state.stats.following },
  ]);

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
          {/* hobbies from store? */}
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
            {statistics.map((statistic, index) => (
              <StatsCard
                key={index}
                title={statistic.title}
                value={statistic.value}
              />
            ))}
          </div>
        </div>
      </section>
    </DivWithShadow>
  );
};

export default UserInfo;
