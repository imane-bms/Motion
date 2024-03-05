import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1>Error 404, something went wrong</h1>
      <h2 style={styles.h2}>
        Go to the <Link to="/">Homepage</Link>.
      </h2>
    </div>
  );
};

//Styles for Not Found Page
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },

  h2: {
    marginTop: "20px",
    cursor: "pointer",
    textDecoration: "none",
  },
};

export default NotFound;
