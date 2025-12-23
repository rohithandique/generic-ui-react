import {
  Button,
  Container,
  Text,
  Title,
  Box,
  rem,
  Group,
  Flex,
} from '@mantine/core';

export function Hero() {
  return (
    <Box
      component="section"
      pt={rem(120)}
      pb={rem(80)}
      style={{ width: '100%' }}
    >
      {' '}
      <Container size="md">
        <Flex direction="column" align="center" ta="center">
          <Title
            order={1}
            style={{
              fontWeight: 800,
              fontSize: rem(62),
              letterSpacing: rem(-1),
              marginBottom: rem(15),
            }}
          >
            Generic
          </Title>

          <Container p={0} size={580}>
            <Text size="lg" c="dimmed">
              Build more reliable software with AI companion. AI is also trained
              to detect lazy developers who do nothing and just complain on
              Twitter.
            </Text>
          </Container>

          <Group justify="center" mt={40} gap="md">
            <Button variant="default" size="lg" radius="md" h={rem(54)} px={30}>
              Book a demo
            </Button>
            <Button variant="filled" size="lg" radius="md" h={rem(54)} px={30}>
              Purchase a license
            </Button>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
}
