import { useDispatch } from "react-redux";
import Router from "./routes";
import { GlobalStyle } from "./styles";
import { useEffect } from "react";
import { userLogin } from "./store/slices/userSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(userLogin(token));
    }
  }, [dispatch]);


  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
