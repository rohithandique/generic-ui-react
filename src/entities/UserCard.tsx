import { Box, Group, MantineTheme, UnstyledButton, Text } from '@mantine/core';

export function UserCard() {
  return (
    <UnstyledButton
      p="md"
      style={(theme: MantineTheme) => ({
        display: 'block',
        width: '100%',
        borderRadius: theme.radius.sm,
      })}
    >
      <Group>
        <Box style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Rohit Handique
          </Text>
          <Text c="dimmed" size="xs">
            rohit.handique@gmail.com
          </Text>
        </Box>
      </Group>
    </UnstyledButton>
  );
}
