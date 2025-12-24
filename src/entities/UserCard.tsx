import { useAuth } from '@/app/providers/auth-context';
import { Box, Group, MantineTheme, UnstyledButton, Text } from '@mantine/core';

export function UserCard() {
  const { user, isLoading } = useAuth();

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
            {!isLoading && user ? user.user_metadata.name : ''}
          </Text>
          <Text c="dimmed" size="xs">
            {!isLoading && user ? user.email : ''}
          </Text>
        </Box>
      </Group>
    </UnstyledButton>
  );
}
