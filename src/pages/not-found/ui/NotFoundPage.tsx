import { Button, Container, Group, Text, Title, rem, Box } from '@mantine/core';
import { Illustration } from './Illustration';
import { Link } from '@tanstack/react-router';
import { Footer } from '@/widgets/footer';

export function NotFoundPage() {
  const SIDEBAR_WIDTH = rem(300);
  const borderColor =
    'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-4))';
  return (
    <Box
      component="header"
      style={{ position: 'relative', minHeight: '100vh' }}
    >
      <Box
        w={SIDEBAR_WIDTH}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          borderRight: `${rem(1)} solid ${borderColor}`,
        }}
      />

      <Container
        style={{
          paddingTop: rem(80),
          paddingBottom: rem(80),
          height: `calc(80vh - ${rem(70)})`,
        }}
      >
        <Box style={{ position: 'relative' }}>
          <Illustration
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.75,

              color:
                'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))',
            }}
          />

          <Box
            style={() => ({
              paddingTop: rem(220),
              position: 'relative',
              zIndex: 1,
            })}
          >
            <Title
              style={(theme) => ({
                fontFamily: `Outfit, ${theme.fontFamily}`,
                textAlign: 'center',
                fontWeight: 500,
                fontSize: rem(38),
              })}
            >
              Nothing to see here
            </Title>

            <Text
              c="dimmed"
              size="lg"
              ta="center"
              style={{
                maxWidth: rem(540),
                margin: 'auto',
                marginTop: 'var(--mantine-spacing-xl)',
                marginBottom: 'calc(var(--mantine-spacing-xl) * 1.5)',
              }}
            >
              Page you are trying to open does not exist. You may have mistyped
              the address, or the page has been moved to another URL. If you
              think this is an error contact support.
            </Text>

            <Group justify="center">
              <Link to="/">
                <Button size="md">Take me back to home page</Button>
              </Link>
            </Group>
          </Box>
        </Box>
      </Container>
      <Box
        w={SIDEBAR_WIDTH}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          borderLeft: `${rem(1)} solid ${borderColor}`,
        }}
      />
      <Footer />
    </Box>
  );
}
