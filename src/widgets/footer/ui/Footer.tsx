import { ActionIcon, Anchor, Group, Container, rem, Box } from '@mantine/core';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Store' },
  { link: '#', label: 'Careers' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));
  const SIDEBAR_WIDTH = rem(300);
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
        ></Group>
        <Group justify="space-between" px="xl" style={{ flex: 1 }}>
          <Box
            component="footer"
            style={() => ({
              marginTop: rem(120),
            })}
          >
            <Container
              size="md"
              style={(theme) => ({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: theme.spacing.md,
                paddingBottom: theme.spacing.md,
              })}
            >
              <Group gap="sm">{items}</Group>
            </Container>
          </Box>
        </Group>
        <Group
          w={SIDEBAR_WIDTH}
          style={{
            borderLeft: `${rem(1)} solid light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-4))`,
          }}
        >
          <Group mt="xl" ml="xl">
            <ActionIcon size="lg" variant="default" radius="xl"></ActionIcon>
            <ActionIcon size="lg" variant="default" radius="xl"></ActionIcon>
            <ActionIcon size="lg" variant="default" radius="xl"></ActionIcon>
          </Group>
        </Group>
      </Group>
    </Box>
  );
}
