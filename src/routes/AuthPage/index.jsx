import LeftAuthor from "./components/LeftAuth";
import SignInRight from "./components/SignInRight";
import SignUpRight from "./components/SignUpRight";
import SignUpStepSecondRight from "./components/SignUpStepSecondRight"
import VerificationRight from "./components/VerificationRight"
import { LeftParent, SignInRoot } from './styles';
import { useState, useEffect} from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import AxiosUser, { getMyProfileData } from "../../axios";
import { userLogin, userObject } from "../../store/slices/userSlice"
import Spinner from "../../components/Spinner";

const Login = () => {
    useEffect(() => {
      isLogedin && navigate("/feed");
    });
  

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    
    const [email, setEmail] = useState("nopek61472@mcuma.com");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("django");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [code, setCode] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    //navigating between the verification pages
    const [logChild, setLogChild] = useState("login");
  
    //check it user is logged in
    const isLogedin = useSelector((state) => state.user.token);
  
    // Clears all form fields
    function clearForm() {
      setEmail("");
      setUserName("");
      setPassword("");
      setRepeatPassword("");
      setFirstName("");
      setLastName("");
      setCode("");
    }
  
    // function for Login
    async function submitLoginForm(e) {
      e.preventDefault();
      setError("");
      setIsLoading(true);
      try {
        const res = await AxiosUser.post("/auth/token/", {
          email: email,
          password: password,
        });
        const token = res.data.access;
        navigate("/feed");
        dispatch(userLogin(token));
        window.localStorage.setItem("token", token);
        const user = await getMyProfileData(token)
        dispatch(userObject(user.data))
      } catch (errors) {
        setError(errors.response.data.detail);
      } finally {
        setIsLoading(false);
      }
    }
  
    // function for registration
    async function submitRegisterForm(e) {
      e.preventDefault();
      setError("");
      try {
        setIsLoading(true);
        await AxiosUser.patch("/auth/registration/validation/", {
          email,
          username: userName,
          code,
          password,
          password_repeat: repeatPassword,
          first_name: firstName,
          last_name: lastName,
        });
  
        // setLogChild("login");
        // navigate("/");
        const res = await AxiosUser.post("/auth/token/", {
          email: email,
          password: password,
        });
        const token = res.data.access;
        navigate("/feed");
        dispatch(userLogin(token));
        window.localStorage.setItem("token", token);
        const user = await getMyProfileData(token)
        dispatch(userObject(user.data))
  
        
      } catch (errors) {
        setError(errors.response.data.detail);
      } finally {
        setIsLoading(false);
      }
    }
  
    // function for email form submission for registration
    async function submitEmailForm(e) {
      e.preventDefault();
      setError("");
      setIsLoading(true);
      try {
        await AxiosUser.post("/auth/registration/", { email: email });
        setLogChild("confirm");
      } catch (errors) {
        setError(errors.response.data.email);
      } finally {
        setIsLoading(false);
      }
    }
  

  return (
    <SignInRoot>
      <LeftParent>
    <LeftAuthor/>
    {
          isLoading ? (
            <Spinner />) : logChild === "login" ? ( 
            <SignInRight
            email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              submitLoginForm={submitLoginForm}
              error={error}
              setLogChild={setLogChild}
              clearForm={clearForm}
            /> )
            : logChild === "register" ? (
                <SignUpRight
                  email={email}
                  setEmail={setEmail}
                  submitEmailForm={submitEmailForm}
                  error={error}
                  setLogChild={setLogChild}
                  clearForm={clearForm}
                /> )
                : logChild === "confirm" ? (
                    <SignUpStepSecondRight
                    email={email}
                    setLogChild={setLogChild}/>
                  ) :  logChild === "veryfication" ? (
                    <VerificationRight email={email}
                    userName={userName}
                    code={code}
                    password={password}
                    repeatPassword={repeatPassword}
                    firstName={firstName}
                    lastName={lastName}
                    setEmail={setEmail}
                    setUserName={setUserName}
                    setCode={setCode}
                    setPassword={setPassword}
                    setRepeatPassword={setRepeatPassword}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    submitRegisterForm={submitRegisterForm}
                    error={error}
                    setLogReg={setLogChild}
                    clearForm={clearForm}
                    />):<div></div>
                  }
        
           
    </LeftParent>
    </SignInRoot>
    
  );
};
export default Login;