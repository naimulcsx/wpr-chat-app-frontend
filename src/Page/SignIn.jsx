import { IconMail, IconLock } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { Anchor } from "../components/Anchor";
import { Button } from "../components/Button";
import { PasswordInput } from "../components/PasswordInput";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordLessThanEight, setIsPasswordLessThanEight] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if (e.target.value.length < 8) {
      setIsPasswordLessThanEight(true);
    } else {
      setIsPasswordLessThanEight(false);
    }

    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="max-w-md space-y-4">
      <Text size="xl" weight="bold">
        Sign In
      </Text>

      <TextInput
        label="Email"
        placeholder="your@email.com"
        icon={<IconMail className="w-5 h-5 text-gray-400" />}
        value={email}
        onChange={handleEmailChange}
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        error={
          isPasswordLessThanEight && "Password must be at least 8 characters"
        }
        icon={<IconLock className="w-5 h-5 text-gray-400" />}
        value={password}
        onChange={handlePasswordChange}
      />

      <Button className="w-full" onClick={handleSignIn}>
        Sign In
      </Button>

      <div className="text-center">
        <Text size="sm" className="text-gray-600">
          Don&apos;t have an account? <Anchor href="/signup">Sign up</Anchor>
        </Text>
      </div>
    </div>
  );
};

export default SignIn;
