import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { login, signup } from "../services/userService";

function Login(props) {
  const [state, errorMessage, handleChange, handleSubmit] = useAuth(
    {
      email: "",
      password: "",
    },
    "login",
    props
  );
  return (
    <div>
      {errorMessage !== "" && errorMessage}
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          name="email"
          value={state.email}
          onChange={handleChange}
          required={true}
          type="email"
        />
        <label>Password: </label>
        <input
          name="password"
          type="password"
          value={state.password}
          onChange={handleChange}
          required={true}
        />
        <button type="submit"> Login </button>
      </form>
    </div>
  );
}

// class Login extends React.Component {
//   state = {
//     email: "",
//     password: "",
//     errorMessage: "",
//   };
//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     login({
//       username: this.state.username,
//       email: this.state.email,
//       password: this.state.password,
//     })
//       .then((response) =>
//         response.accessToken
//           ? (localStorage.setItem("accessToken", response.accessToken),
//             this.props.authenticate(response.user),
//             this.props.history.push("/"))
//           : this.setState({
//               errorMessage: response.errorMessage,
//             })
//       )
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     const { email, password, errorMessage } = this.state;
//     return (
//       <div>
//         {errorMessage !== "" && errorMessage}
//         <form onSubmit={this.handleSubmit}>
//           <label>Email: </label>
//           <input
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//             required={true}
//             type="email"
//           />
//           <label>Password: </label>
//           <input
//             name="password"
//             type="password"
//             value={password}
//             onChange={this.handleChange}
//             required={true}
//           />
//           <button type="submit"> Login </button>
//         </form>
//       </div>
//     );
//   }
// }

export default Login;
