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
  NumberInput,
  HobbyWrapper,
  RemoveBtn,
  SmallFlexDiv,
  HobbyText,
  HobbiesInput,
  CustomSelect,
  UpdateImageMenue,
  TextHighlight,
} from "./styles";

import jennifer from "../../assets/images/users/jennifer.png";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile, updateprofile } from "../../store/slices/profileSlice";

const UserEdit = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectProfile);
  // track changes made by the user :
  const [formData, setFormData] = useState(user);

  const inputHandler = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const [hobbies, setHobbies] = useState(user.hobbies || []);
  // to control/hold the current hobby being typed
  const [newHobby, setNewHobby] = useState("");

  const hobbiesHandler = (e) => {
    e.preventDefault();
    // check if the input is not empty or contains only space ans allow only 5 hobbies
    //trim() method removes the white space
    if (newHobby.trim() !== "" && hobbies.length < 5) {
      const updatedHobbies = [...hobbies, newHobby]; // add the new hobby to the hobbies list
      setFormData((prevData) => ({
        ...prevData,
        hobbies: updatedHobbies,
      }));
      setHobbies(updatedHobbies); // update locally
      setNewHobby(""); // clear the input filed after adding the new hobby
    }
  };

  const removeHobby = (index) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      hobbies: updatedHobbies,
    }));
    setHobbies(updatedHobbies); // update locally
  };
  //   user clicks UPDATE IMAGE => dropdown appears
  const [isToUpdateImg, setIsToUpdateImg] = useState(false);
  const [imageSrc, setImageSrc] = useState(null); //to store the url of the image when uploaded

  const updateImage = () => setIsToUpdateImg(!isToUpdateImg);

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
  const saveChanges = () => {
    dispatch(updateprofile(formData)); // dispatch changed to redux store only when save btn is clicked
  };

  return (
    <SmallDivWithShadow>
      <LeftFlexColDiv>
        <FlexColContainer>
          {/* display uploaded avatar */}
          {imageSrc && <img src={imageSrc} alt="avatar" />}
          <Image src={jennifer} alt="avatar" />
          <SimpleButton onClick={updateImage}>UPDATE IMAGE</SimpleButton>
          {/* on click=> upload or remove */}
          {isToUpdateImg && (
            <UpdateImageMenue>
              {/* input to upload new img using file type*/}
              <label htmlFor="upload-img">
                <TextHighlight>UPLOAD</TextHighlight>
              </label>
              <input
                id="upload-img"
                style={{ visibility: "hidden" }}
                type="file"
                onClick={handleUploadImage}
              />
              <TextHighlight onClick={handleRemoveImage}>REMOVE</TextHighlight>
            </UpdateImageMenue>
          )}
        </FlexColContainer>
        <FlexColContainer>
          <SimpleButton>DELETE ACCOUNT</SimpleButton>
          {/*delete userdata from store*/}
          <GradientButton onClick={saveChanges}>SAVE</GradientButton>
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
              value={formData.firstName}
              required
              onChange={inputHandler}
            />
          </StyledGridItem>
          <StyledGridItem>
            <label htmlFor="lastName">Last Name </label>
            <Input
              type="text"
              id="lastName"
              value={formData.lastName}
              required
              onChange={inputHandler}
            />
          </StyledGridItem>
          <StyledGridItem>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              required
              onChange={inputHandler}
            />
          </StyledGridItem>
          <StyledGridItem>
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              id="username"
              value={formData.username}
              required
              onChange={inputHandler}
            />
          </StyledGridItem>
          <StyledGridItem>
            {/* location is a drop list */}
            <label htmlFor="location">Location</label>
            <CustomSelect
              type="text"
              id="location"
              value={formData.location}
              required
              onChange={inputHandler}
            >
              <option disabled>Choose Your Location</option>
              <option value="Berlin,Germany">Berlin, Germany</option>
              <option value="Zürich,Switzerland">Zürich,Switzerland</option>
              <option value="Tokyo, Japan">Tokyo, Japan</option>
              <option value="Rabat, Morocco">Rabat, Morocco</option>
            </CustomSelect>
          </StyledGridItem>
          <StyledGridItem>
            <label htmlFor="phone">Phone </label>
            <NumberInput
              type="number"
              id="phone"
              value={formData.phone}
              required
              onChange={inputHandler}
            />
          </StyledGridItem>
          <TallerGridItem>
            <label htmlFor="about">About</label>
            <Input
              type="text"
              id="about"
              value={formData.about}
              required
              onChange={inputHandler}
            />
          </TallerGridItem>
          <StyledGridItem>
            <label htmlFor="password">Password</label>

            <Input
              type="password"
              id="password"
              value={formData.password}
              required
              onChange={inputHandler}
            />
          </StyledGridItem>

          <HobbiesContainer>
            <p>Things I like</p>
            {/* added hobbies in form of buttons here */}
            <SmallFlexDiv>
              {hobbies.map((hobby, index) => (
                <HobbyWrapper key={index}>
                  <HobbyText>{hobby}</HobbyText>
                  <RemoveBtn onClick={() => removeHobby(index)}>X</RemoveBtn>
                </HobbyWrapper>
              ))}
            </SmallFlexDiv>
            {/* Updated the function to controll the addition of new hobbies */}
            <HobbiesInput
              type="text"
              placeholder="Type something..."
              value={newHobby}
              onChange={(e) => setNewHobby(e.target.value)}
            />
            <SimpleButton onClick={hobbiesHandler}>ADD</SimpleButton>
          </HobbiesContainer>
        </FormGrid>
      </RightDivContainer>
    </SmallDivWithShadow>
  );
};

export default UserEdit;
