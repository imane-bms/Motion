import LeftAuthor from "./components/LeftAuth";
import SignInRight from "./components/SignInRight";
import SignUpRight from "./components/SignUpRight";
import SignUpStepSecondRight from "./components/SignUpStepSecondRight"
import VerificationRight from "./components/VerificationRight"
import Spinner from "../../components/Spinner";
import UserAxios, { getMyUserDatas } from "../../axios";
import { LeftParent, SignInRoot } from './styles';

import { useState, useEffect} from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userObject } from "../../store/slices/userSlice"


const Login = () => {
    useEffect(() => {
      isLoggedin && navigate("/feed");
    });
  

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    
    const [email, setEmail] = useState("jimod43468@artgulin.com");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("123456");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [code, setCode] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    //navigating between sign in and sign up page
    const [logged, setLogged] = useState("login");
  
    //check it user is logged in
    const isLoggedin = useSelector((state) => state.user.token);
  
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
  
    // function for Login, Navigating  to feed page
    async function submitLoginForm(e) {
      e.preventDefault();
      setError("");
      setIsLoading(true);
      try {
        const res = await UserAxios.post("/auth/token/", {
          email: email,
          password: password,
        });
        const token = res.data.access;
        navigate("/feed"); 
        dispatch(userLogin(token));
        window.localStorage.setItem("token", token);
        const user = await getMyUserDatas(token)
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
        await UserAxios.patch("/auth/registration/validation/", {
          email,
          username: userName,
          code,
          password,
          password_repeat: repeatPassword,
          first_name: firstName,
          last_name: lastName,
        });

  
       
        const res = await UserAxios.post("/auth/token/", {
            email: email,
            password: password,
          });
          const token = res.data.access;
          navigate("/feed");
          dispatch(userLogin(token));
          window.localStorage.setItem("token", token);
          const user = await getMyUserDatas(token)
          dispatch(userObject(user.data))
          console.log("logged in")
    
          
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
          await UserAxios.post("/auth/registration/", { email: email });
          setLogged("confirm");
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
              <Spinner />) : logged === "login" ? ( 
              <SignInRight
              email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                submitLoginForm={submitLoginForm}
                error={error}
                setLogged={setLogged}
                clearForm={clearForm}
              /> )
              : logged === "register" ? (
                  <SignUpRight
                    email={email}
                    setEmail={setEmail}
                    submitEmailForm={submitEmailForm}
                    error={error}
                    setLogged={setLogged}
                    clearForm={clearForm}
                  /> )
                  : logged === "confirm" ? (
                      <SignUpStepSecondRight
                      email={email}
                      setLogged={setLogged}/>
                    ) :  logged === "verification" ? (
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
                      setLogReg={setLogged}
                      clearForm={clearForm}
                      />):
                      <div></div>
                    }
          
             
      </LeftParent>
      </SignInRoot>
      
    );
  };
  export default Login;
  