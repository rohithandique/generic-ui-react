import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
  rem,
  Box,
} from '@mantine/core';

const mockdata = [
  {
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
  },
  {
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
  },
  {
    title: 'No third parties',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
  },
];

export function Features() {
  const theme = useMantineTheme();

  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      padding="xl"
      style={{
        border: `1px solid light-dark(${theme.colors.gray[1]}, ${theme.colors.dark[5]})`,
      }}
    >
      <Box mt="md">
        <Text fz="lg" fw={500}>
          {feature.title}
        </Text>
        {/* The Blue Underline for Cards */}
        <Box h={2} w={45} mt="sm" />
      </Box>

      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Best company ever
        </Badge>
      </Group>

      <Title
        order={2}
        ta="center"
        mt="sm"
        style={{
          fontSize: rem(34),
          fontWeight: 500,
        }}
      >
        Integrate effortlessly with any technology stack
      </Title>

      <Box maw={600} mx="auto">
        <Text c="dimmed" ta="center" mt="md">
          Every once in a while, you’ll see a Golbat that’s missing some fangs.
          This happens when hunger drives it to try biting a Steel-type Pokémon.
        </Text>
        <Box h={2} w={45} mt="sm" mx="auto" />
      </Box>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
