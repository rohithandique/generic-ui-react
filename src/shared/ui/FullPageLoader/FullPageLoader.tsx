import { Center, Loader, Stack, Text } from '@mantine/core';

export const FullPageLoader = () => (
  <Center style={{ height: '100vh', width: '100vw' }}>
    <Stack align="center" gap="xs">
      <Loader size="xl" type="bars" />
      <Text size="sm" c="dimmed">
        Verifying session...
      </Text>
    </Stack>
  </Center>
);
