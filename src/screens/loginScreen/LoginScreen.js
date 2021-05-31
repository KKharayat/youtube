import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/authAction";
import "./_loginScreen.scss";

const LoginScreen = (props) => {
  const handleLogin = () => {
    props.login();
  };

  const history = useHistory();
  useEffect(() => {
    if (props.auth) {
      history.push("/");
    }
  }, [props.auth, history]);
  return (
    <div className="login">
      <div className="login_container">
        <h2>Youtube Clone</h2>
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login With google</button>
        <p>This Project is made using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth.accessToken,
});

export default connect(mapStateToProps, { login })(LoginScreen);
