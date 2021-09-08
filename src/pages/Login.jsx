import LoginButton from "../components/LoginButton";

export default function Login(props) {
  console.log(props.getLogined);
  return (
    <div>
      <h2>Login</h2>
      <LoginButton getLogined={props.getLogined} />
    </div>
  );
}
