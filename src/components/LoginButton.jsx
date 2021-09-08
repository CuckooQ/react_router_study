import { withRouter } from "react-router";

export default withRouter(function LoginButton(props) {
  function login() {
    setTimeout(() => {
      // console.log(props);
      props.getLogined();
      props.history.push("/");
    }, 1000);
  }
  return <button onClick={login}>Login</button>;
});
