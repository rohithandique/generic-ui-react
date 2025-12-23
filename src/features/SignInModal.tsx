import { useDisclosure } from '@mantine/hooks';
import {
  Anchor,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  Box,
  rem,
  Modal,
  Button,
  Flex,
  Group,
} from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';

export function SignInModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();

  const modalContentHeight = rem(550);

  const mockLogin = () => {
    close();
    navigate({ to: '/dashboard' });
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        centered
        size="xl"
        padding={0}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        styles={{
          content: {
            height: modalContentHeight,
            padding: 0,
            display: 'flex',
            borderRadius: rem(8),
            overflow: 'hidden',
          },
          body: {
            padding: 0,
            display: 'flex',
            flexGrow: 1,
          },
          header: {
            display: 'none',
          },
        }}
      >
        <Flex direction={{ base: 'column', sm: 'row' }} h="100%" w="100%">
          <Paper
            p="xl"
            radius={0}
            style={(theme) => ({
              flex: 1,
              minWidth: rem(300),
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: theme.colors.dark[7],
            })}
          >
            <Title
              order={2}
              ta="center"
              mb={30}
              style={(theme) => ({
                fontFamily: `Outfit, ${theme.fontFamily}`,
                fontWeight: 600,
                color: theme.white,
              })}
            >
              Get Started!
            </Title>

            <TextInput
              label="Email address"
              placeholder="hello@gmail.com"
              size="md"
              radius="md"
              required
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
              radius="md"
              required
            />

            <Group justify="space-between" mt="lg">
              <Checkbox label="Keep me logged in" size="sm" />
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>

            <Button
              variant="filled"
              fullWidth
              mt="xl"
              size="md"
              radius="md"
              onClick={() => mockLogin()}
            >
              Login
            </Button>

            <Text ta="center" mt="md" size="sm">
              Don&apos;t have an account?{' '}
              <Anchor
                href="#"
                fw={700}
                onClick={(event) => event.preventDefault()}
              >
                Register
              </Anchor>
            </Text>
          </Paper>

          <Box
            style={(theme) => ({
              flex: 1.5,
              backgroundImage:
                'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              display: theme.breakpoints.sm ? 'block' : 'none',
            })}
          />
        </Flex>
      </Modal>

      <Button variant="default" onClick={open}>
        Sign In
      </Button>
    </>
  );
}
