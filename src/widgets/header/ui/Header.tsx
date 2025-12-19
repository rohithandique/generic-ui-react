import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ReactLogo from '@/shared/assets/react.svg?react';

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const theme = useMantineTheme();

  // Shared link styles to avoid repetition
  const linkStyles = {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',
  };

  return (
    <Box>
      <header
        style={{
          height: rem(60),
          paddingLeft: 'var(--mantine-spacing-md)',
          paddingRight: 'var(--mantine-spacing-md)',
          borderBottom: `${rem(1)} solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))`,
        }}
      >
        <Group justify="space-between" h="100%">
          <ReactLogo width={30} height={30} />

          {/* Desktop Navigation */}
          <Group h="100%" gap={0} visibleFrom="sm">
            <Box component="a" href="#" style={linkStyles}>
              Home
            </Box>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {/* Mobile Navigation */}
          <Box
            component="a"
            href="#"
            style={{
              ...linkStyles,
              height: rem(42),
              width: '100%',
            }}
          >
            Home
          </Box>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
