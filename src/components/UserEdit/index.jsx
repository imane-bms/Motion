import { useState } from "react";
import { DivWithShadow, GradientButton, SimpleButton } from "../../styles";

const UserEdit = () => {
  const [user, setUser] = useState({});
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const [hobbies, setHobbies] = useState([]);
  const hobbiesHandler = (e) => {
    setHobbies([...hobbies, e.target.value]);
  };
  //   user clicks UPDATE IMAGE => dropdown appears
  const [isClicked, setIsClicked] = useState(false);
  const [imageSrc, setImageSrc] = useState(null); //to store the url of the image when uploaded

  const updateImage = () => setIsClicked(!isClicked);

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result); // set imageSrc to the data of the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => setImageSrc(null);

  return (
    <DivWithShadow>
      <section className="left-profileEdit">
        {/* display uploaded avatar */}
        {imageSrc && <img src={imageSrc} alt="avatar" />}
        <button className="Update-img" onClick={updateImage}>
          UPDATE IMAGE
        </button>
        {/* on click=> upload or remove */}
        {isClicked && (
          <div>
            {/* input to upload new img using file type*/}
            <label htmlFor="upload-img">UPLOAD</label>
            <input
              id="upload-img"
              style={{ visibility: "hidden" }}
              type="file"
              onClick={handleUploadImage}
            />
            <button className="remove-btn" onClick={handleRemoveImage}>
              REMOVE
            </button>
          </div>
        )}
        <SimpleButton>DELETE ACCOUNT</SimpleButton>{" "}
        {/*delete userdata from store*/}
        <GradientButton>SAVE</GradientButton>{" "}
        {/* on submit =>dispatch changes to store*/}
      </section>
      <section className="right-profileEdit">
        <form>
          <label>
            First Name
            <input
              type="text"
              id="firstName"
              required
              onChange={inputHandler}
            />
          </label>
          <label>
            Last Name
            <input type="text" id="lastName" required onChange={inputHandler} />
          </label>
          <label>
            Email
            <input type="email" id="email" required onChange={inputHandler} />
          </label>
          <label>
            Username
            <input type="text" id="username" required onChange={inputHandler} />
          </label>
          {/* location is a drop list */}
          <label>
            Location
            <select type="text" id="location" required onChange={inputHandler}>
              <option value="Berlin,Germany">Berlin, Germany</option>
              <option value="Zürich,Switzerland">Zürich,Switzerland</option>
              <option value="Tokyo, Japan">Tokyo, Japan</option>
              <option value="Rabat, Morocco">Rabat, Morocco</option>
            </select>
          </label>
          <label>
            Phone
            <input type="number" id="phone" required onChange={inputHandler} />
          </label>
          <label>
            About
            <input type="text" id="about" required onChange={inputHandler} />
          </label>
          <label>
            Password
            <input
              type="password"
              id="password"
              required
              onChange={inputHandler}
            />
          </label>
          <div className="hobbies">
            <p>Things I like</p>
            {/* added hobbies in form of buttons here */}
            {hobbies.map((hobby, index) => {
              return <button key={index}>{hobby} X</button>;
            })}
            <input type="text" placeholder="Type something..." />
            <SimpleButton onClick={hobbiesHandler}>ADD</SimpleButton>
          </div>
        </form>
      </section>
    </DivWithShadow>
  );
};

export default UserEdit;
