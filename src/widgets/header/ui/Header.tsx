import { rem, Group, Box } from '@mantine/core';
import AppTitle from '@/shared/ui/AppTitle';
import { useLocation } from '@tanstack/react-router';
import { SignInModal } from '@/features/SignInModal';
import { UserCard } from '@/entities/UserCard';

export function Header() {
  const SIDEBAR_WIDTH = rem(300);
  const location = useLocation();
  return (
    <Box
      component="header"
      style={{
        height: rem(70),
        borderBottom: `${rem(1)} solid light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-4))`,
      }}
    >
      <Group h="100%" gap={0} align="stretch">
        <Group
          w={SIDEBAR_WIDTH}
          px="xl"
          gap="xs"
          style={{
            borderRight: `${rem(1)} solid light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-4))`,
          }}
        >
          {location.pathname != '/' && <AppTitle />}
        </Group>
        <Group justify="space-between" px="xl" style={{ flex: 1 }}>
          <Box> {location.pathname == '/' && <AppTitle />}</Box>
          <SignInModal />
        </Group>
        <Group
          w={SIDEBAR_WIDTH}
          style={{
            borderLeft: `${rem(1)} solid light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-4))`,
          }}
        >
          {location.pathname != '/' && <UserCard />}
        </Group>
      </Group>
    </Box>
  );
}
