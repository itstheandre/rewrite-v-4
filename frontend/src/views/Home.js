import React, { useEffect, useState } from "react";

const Home = (props) => {
  const [count, setcount] = useState(0);
  const [count2, setCount2] = useState(0);
  const { username } = props.user;

  useEffect(() => {
    console.log("EMPTY ARRAY MOUNTING yo");

    return () => console.log("UNMOUNTINg");
  }, []);

  useEffect(() => {
    console.log("COUNT 1 MOUNTING yo");
  }, [count]);

  useEffect(() => {
    console.log("EVERY SINGLE TIME USEEFFECT yo");
  });

  return (
    <div>
      <button onClick={() => setcount((c) => c + 1)}>{count}</button>
      <button onClick={() => setCount2((c) => c + 1)}>{count2}</button>
      <h1>welcome {username && props.user.username}</h1>
    </div>
  );
};

// class Home2 extends React.Component {
//   state =  {
//   somethibg = []
//   }

// componentDidMount = () => getAllTasks.then

//   render() {
//     return( <div>
//     <h1>welcome {username && props.user.username}</h1>
//   </div>)
//   }
// }

export default Home;
