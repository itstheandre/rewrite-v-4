import { useState } from "react";
import { login, signup } from "../services/userService";

export default function useAuth(form, typeOfAuth, props) {
  const [state, setState] = useState(form);

  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (typeOfAuth === "login") {
      login({
        ...state,
      })
        .then((response) =>
          response.accessToken
            ? (localStorage.setItem("accessToken", response.accessToken),
              props.authenticate(response.user),
              props.history.push("/"))
            : setErrorMessage(response.errorMessage)
        )
        .catch((err) => {
          console.log(err);
        });
    } else if (typeOfAuth === "signup") {
      signup({
        ...state,
      })
        .then((response) =>
          response.accessToken
            ? (localStorage.setItem("accessToken", response.accessToken),
              props.authenticate(response.user),
              props.history.push("/"))
            : setErrorMessage(response.errorMessage)
        )
        .catch((err) => console.log(err));
    }
  }

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return [state, errorMessage, handleChange, handleSubmit];
}
