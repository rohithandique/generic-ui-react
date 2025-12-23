import { Box, rem, MantineTheme } from '@mantine/core';

export function Sidebar() {
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
      <Box style={{ height: `calc(100vh - ${rem(140)})` }}></Box>
      <Box
        mx={`calc(var(--mantine-spacing-md) * -1)`}
        mb="md"
        style={{
          borderTop:
            '1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))',
        }}
        h={rem(70)}
      ></Box>
    </Box>
  );
}
