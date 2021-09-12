import { useParams } from "react-router";

export default function Dashboard(props) {
  const params = useParams();
  // const { id } = props.match.params;
  const { id } = params;
  return (
    <div>
      <h2>DASH BOARD</h2>
      {id && <p>ID는 {id}이다.</p>}
    </div>
  );
}
