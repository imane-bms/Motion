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
import { useNavigate } from "react-router-dom";
import { updateUserData } from "../../axios";

const UserEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(selectProfile);
  // track changes made by the user :
  const [formData, setFormData] = useState(userData);

  const inputHandler = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const [hobbies, setHobbies] = useState(userData.things_user_likes || []);
  // const hobbies = formData.things_user_likes || [];
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
        things_user_likes: updatedHobbies,
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
      things_user_likes: updatedHobbies,
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

  const saveChanges = async () => {
    try {
      // console.log(formData);
      // send PATCH req to update user data in the API
      await updateUserData(formData);
      // dispatch changed to the store
      dispatch(updateprofile(formData));
      // navigate to userpage
      navigate("/user/me");
    } catch (error) {
      console.log("Error updating the user data", error);
    }
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
            <label htmlFor="first_name">First Name</label>
            <Input
              type="text"
              id="first_name"
              value={formData.first_name}
              required
              onChange={inputHandler}
            />
          </StyledGridItem>
          <StyledGridItem>
            <label htmlFor="last_name">Last Name </label>
            <Input
              type="text"
              id="last_name"
              value={formData.last_name}
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
            <label htmlFor="phone_number">Phone </label>
            <NumberInput
              type="number"
              id="phone_number"
              value={formData.phone_number}
              required
              onChange={inputHandler}
            />
          </StyledGridItem>
          <TallerGridItem>
            <label htmlFor="about_me">About</label>
            <Input
              type="text"
              id="about_me"
              value={formData.about_me}
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
