
export default function ViewDemo ({ loginUser }) {

  function handleClick(){
    loginUser("guest", "password");
  }

  return (
    <button className="btn btn-primary me-3" onClick={handleClick}>
    View Demo
  </button>
  );
}