import { rem, Box } from '@mantine/core';
import { Hero } from './hero';
import { Features } from './features';
import { Footer } from '@/widgets/footer';

export function Landing() {
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

      <Hero />
      <Features />
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
