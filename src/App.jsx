import { Button } from "./components/Button";
import { PasswordInput } from "./components/PasswordInput";
import { TextInput } from "./components/TextInput";
import { Text } from "./components/Text";
import { Anchor } from "./components/Anchor";
import { IconLock, IconMail } from "@tabler/icons-react";
import { Heading } from "./components/Heading";
import SignIn from "./Page/SignIn";

function App() {
  return (
    <div className="m-20 space-y-8">
      <SignIn />
    </div>
  );
}

export default App;
