import LoginButton from "../components/LoginButton";

export default function Login(props) {
  return (
    <div>
      <h2>Login</h2>
      <LoginButton getLogined={props.getLogined} />
    </div>
  );
}
