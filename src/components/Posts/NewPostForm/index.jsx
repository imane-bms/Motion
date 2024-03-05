import { useState } from "react";
import testUser from "../../../assets/images/users/alber.png";
import sendButton from "../../../assets/svgs/send_button.svg";
import { BaseDiv } from "../../../styles";

import { CloseButton, NewPostFormPreviw, Overlay, Popup } from "./styles";

function NewPostForm() {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      <NewPostFormPreviw onClick={openPopup} className="trigger">
        <img src={testUser} alt="testUser" />
        <p>What do you have in your mind?</p>
        <img src={sendButton} alt="send post button" />
      </NewPostFormPreviw>

      {isOpen && (
        <Overlay onClick={closePopup} className="overlay">
          <Popup onClick={(e) => e.stopPropagation()} className="popup">
            <BaseDiv>
              <img src={testUser} alt="testUser" />
              <p>What do you have in your mind?</p>
              <img src={sendButton} alt="send post button" />
            </BaseDiv>
            <CloseButton onClick={closePopup} className="close-btn">
              X
            </CloseButton>
          </Popup>
        </Overlay>
      )}
    </>
  );
}

export default NewPostForm;

//   return (
//     <div className="App">
//       <div onClick={openPopup} className="trigger">
//         Кликни меня
//       </div>

//       {isOpen && (
//         <div onClick={closePopup} className="overlay">
//           <div onClick={(event) => event.stopPropagation()} className="popup">
//             Я попап, кликни вне меня, чтобы закрыть
//             <button onClick={closePopup} className="close-btn">X</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
