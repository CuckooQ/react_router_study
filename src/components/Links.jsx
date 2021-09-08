import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/dashboard"> Dashboard </Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}
