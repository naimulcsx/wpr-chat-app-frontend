import { Button } from "./components/Button";
import { PasswordInput } from "./components/PasswordInput";
import { TextInput } from "./components/TextInput";
import { Text } from "./components/Text";
import { Anchor } from "./components/Anchor";
import { IconLock, IconMail } from "@tabler/icons-react";
import { Heading } from "./components/Heading";

function App() {
  return (
    <div className="m-20 space-y-8">
      <div className="max-w-md space-y-4">
        <Text size="xl" weight="bold">
          Sign In
        </Text>

        <TextInput
          label="Email"
          placeholder="your@email.com"
          icon={<IconMail className="w-5 h-5 text-gray-400" />}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          error="Password must be at least 8 characters"
          icon={<IconLock className="w-5 h-5 text-gray-400" />}
        />

        <Button className="w-full">Sign In</Button>

        <div className="text-center">
          <Text size="sm" className="text-gray-600">
            Don&apos;t have an account? <Anchor href="/signup">Sign up</Anchor>
          </Text>
        </div>
      </div>

      <div className="space-y-4">
        <Text size="lg">Button Variants</Text>
        <div className="space-x-4">
          <Button>Default Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="light">Light Button</Button>
          <Button disabled>Disabled Button</Button>
        </div>
      </div>

      <div className="space-y-4">
        <Text size="lg">Heading Examples</Text>
        <div className="space-y-2">
          <Heading type={1}>Heading 1</Heading>
          <Heading type={2}>Heading 2</Heading>
          <Heading type={3}>Heading 3</Heading>
          <Heading type={4}>Heading 4</Heading>
          <Heading type={5}>Heading 5</Heading>
          <Heading type={6}>Heading 6</Heading>
        </div>
      </div>
    </div>
  );
}

export default App;
