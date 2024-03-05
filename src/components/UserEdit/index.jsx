import { useState } from "react";
import { GradientButton, SimpleButton } from "../../styles";
import {
  FlexColContainer,
  HobbiesContainer,
  Image,
  Input,
  LeftFlexColDiv,
  RightDivContainer,
  SmallDivWithShadow,
  FormGrid,
  StyledGridItem,
  TallerGridItem,
} from "./styles";

import jennifer from "../../assets/images/users/jennifer.png";

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
    <SmallDivWithShadow>
      <LeftFlexColDiv>
        <FlexColContainer>
          {/* display uploaded avatar */}
          {imageSrc && <img src={imageSrc} alt="avatar" />}
          <Image src={jennifer} alt="avatar" />
          <SimpleButton onClick={updateImage}>UPDATE IMAGE</SimpleButton>
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
        </FlexColContainer>
        <FlexColContainer>
          <SimpleButton>DELETE ACCOUNT</SimpleButton>{" "}
          {/*delete userdata from store*/}
          <GradientButton>SAVE</GradientButton>{" "}
          {/* on submit =>dispatch changes to store*/}
        </FlexColContainer>
      </LeftFlexColDiv>
      <RightDivContainer>
        <FormGrid>
          <StyledGridItem>
            <label htmlFor="firstName">First Name</label>
            <Input
              type="text"
              id="firstName"
              required
              onChange={inputHandler}
            />
          </StyledGridItem>
          <StyledGridItem>
            <label htmlFor="lastName">Last Name </label>
            <Input type="text" id="lastName" required onChange={inputHandler} />
          </StyledGridItem>
          <StyledGridItem>
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" required onChange={inputHandler} />
          </StyledGridItem>
          <StyledGridItem>
            <label htmlFor="username">Username</label>
            <Input type="text" id="username" required onChange={inputHandler} />
          </StyledGridItem>
          <StyledGridItem>
            {/* location is a drop list */}
            <label htmlFor="location">Location</label>
            <select type="text" id="location" required onChange={inputHandler}>
              <option value="Berlin,Germany">Berlin, Germany</option>
              <option value="Zürich,Switzerland">Zürich,Switzerland</option>
              <option value="Tokyo, Japan">Tokyo, Japan</option>
              <option value="Rabat, Morocco">Rabat, Morocco</option>
            </select>
          </StyledGridItem>
          <StyledGridItem>
            <label htmlFor="phone">Phone </label>
            <Input type="number" id="phone" required onChange={inputHandler} />
          </StyledGridItem>
          <TallerGridItem>
            <label htmlFor="about">About</label>
            <Input
              type="text"
              id="about"
              required
              onChange={inputHandler}
              isAbout
            />
          </TallerGridItem>
          <StyledGridItem>
            <label htmlFor="password">Password</label>

            <Input
              type="password"
              id="password"
              required
              onChange={inputHandler}
            />
          </StyledGridItem>

          <HobbiesContainer>
            <p>Things I like</p>
            {/* added hobbies in form of buttons here */}
            {hobbies.map((hobby, index) => {
              return <button key={index}>{hobby} X</button>;
            })}
            <input type="text" placeholder="Type something..." />
            <SimpleButton onClick={hobbiesHandler}>ADD</SimpleButton>
          </HobbiesContainer>
        </FormGrid>
      </RightDivContainer>
    </SmallDivWithShadow>
  );
};

export default UserEdit;
