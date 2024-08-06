import { ChatEngine } from "react-chat-engine";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="
9cc55b28-9a85-40bd-aeb2-a402a5a062ca"
      useName="user1"
      userSecret="123"
    />
  ); //we can pass different props inside the ChatEngine; and based on the props we pass it is going to behave differently
};

export default <App />;
