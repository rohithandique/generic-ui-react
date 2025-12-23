import { Flex, Text } from '@mantine/core';
import ReactLogo from '@/shared/assets/react.svg?react';

export default function AppTitle() {
  return (
    <Flex>
      <ReactLogo
        width={25}
        height={25}
        style={{ filter: 'grayscale(1) brightness(0) invert(1)' }}
      />
      <Text size="lg" fw={500} ml={8}>
        Generic
      </Text>
    </Flex>
  );
}
