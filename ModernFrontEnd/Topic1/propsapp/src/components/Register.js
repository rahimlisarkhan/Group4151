export const RegisterButtonGroup = (props) => {
  console.log("RegisterButtonGroup", props);

  return (
    <div>
      <button>Signin</button>
      <button>Get started</button>
      <button>Login</button>

      <h3>Onlinedakilar: {props.online}</h3>
    </div>
  );
};
