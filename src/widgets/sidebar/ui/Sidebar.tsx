import {
  ActionIcon,
  Box,
  Code,
  Group,
  Text,
  TextInput,
  Tooltip,
  UnstyledButton,
  rem,
  MantineTheme,
} from '@mantine/core';

const collections = [
  { emoji: '👍', label: 'Sales' },
  { emoji: '🚚', label: 'Deliveries' },
  { emoji: '💸', label: 'Discounts' },
  { emoji: '💰', label: 'Profits' },
  { emoji: '✨', label: 'Reports' },
  { emoji: '🛒', label: 'Orders' },
  { emoji: '📅', label: 'Events' },
  { emoji: '🙈', label: 'Debts' },
  { emoji: '💁‍♀️', label: 'Customers' },
];

// --- Sub-component: UserButton ---
function UserButton() {
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

// --- Main Component ---
export function Sidebar() {
  const collectionLinks = collections.map((collection) => (
    <Box
      component="a"
      href="#"
      key={collection.label}
      onClick={(event) => event.preventDefault()}
      style={(theme: MantineTheme) => ({
        display: 'block',
        padding: `${rem(8)} ${theme.spacing.xs}`,
        textDecoration: 'none',
        borderRadius: theme.radius.sm,
        fontSize: theme.fontSizes.xs,
        lineHeight: 1,
        fontWeight: 500,
        color:
          'light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))',
      })}
    >
      <Box component="span" mr={9} fz={16}>
        {collection.emoji}
      </Box>
      {collection.label}
    </Box>
  ));

  return (
    <Box
      component="nav"
      style={(theme: MantineTheme) => ({
        backgroundColor: 'var(--mantine-color-body)',
        height: '100%',
        width: rem(300),
        padding: theme.spacing.md,
        display: 'flex',
        flexDirection: 'column',
        borderRight: `1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))`,
      })}
    >
      <Box style={{ height: `calc(100vh - ${rem(140)})` }}>
        <TextInput
          placeholder="Search"
          size="xs"
          rightSectionWidth={70}
          rightSection={
            <Code style={{ fontSize: rem(10), fontWeight: 700 }}>Ctrl + K</Code>
          }
          styles={{ section: { pointerEvents: 'none' } }}
          mb="sm"
        />

        <Box
          pt="md"
          style={{
            borderTop:
              '1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))',
          }}
        >
          <Group justify="space-between" mb={5} px="xs">
            <Text size="xs" fw={500} c="dimmed">
              Collections
            </Text>
            <Tooltip label="Create collection" withArrow position="right">
              <ActionIcon variant="default" size={18}></ActionIcon>
            </Tooltip>
          </Group>
          <Box>{collectionLinks}</Box>
        </Box>
      </Box>
      <Box
        mx={`calc(var(--mantine-spacing-md) * -1)`}
        mb="md"
        style={{
          borderTop:
            '1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))',
        }}
        h={rem(70)}
      >
        <UserButton />
      </Box>
    </Box>
  );
}
