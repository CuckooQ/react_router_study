export default function Dashboard(props) {
  const { id } = props.match.params;
  return (
    <div>
      <h2>DASH BOARD</h2>
      {id && <p>ID는 {id}이다.</p>}
    </div>
  );
}
