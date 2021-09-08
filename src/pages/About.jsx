import QueryString from "query-string";

export default function About(props) {
  const params = QueryString.parse(props.history.location.search);
  const { name } = params;
  return (
    <div>
      <h2>ABOUT</h2>
      {name && <p>이름은 {name}이다.</p>}
    </div>
  );
}
