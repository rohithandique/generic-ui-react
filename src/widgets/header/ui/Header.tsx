import { Box, Button, Flex, Group, rem, Text } from '@mantine/core';
import ReactLogo from '@/shared/assets/react.svg?react';

export function Header() {
  return (
    <Box>
      <header
        style={{
          height: rem(60),
          paddingLeft: 'var(--mantine-spacing-md)',
          paddingRight: 'var(--mantine-spacing-md)',
          borderBottom: `${rem(1)} solid light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-3))`,
        }}
      >
        <Group justify="space-between" h="100%">
          <Flex
            mih={50}
            gap="md"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <ReactLogo
              width={25}
              height={25}
              style={{ filter: 'grayscale(1) brightness(0) invert(1)' }}
            />
            <Text size="lg">Generic</Text>
          </Flex>
          <Group visibleFrom="sm">
            <Button variant="default">Sign In</Button>
          </Group>
        </Group>
      </header>
    </Box>
  );
}
