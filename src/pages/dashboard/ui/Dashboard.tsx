import { Sidebar } from '@/widgets/sidebar';
import { Box, Flex, rem } from '@mantine/core';

export function Dashboard() {
  return (
    <Flex align="stretch" style={{ height: `calc(100vh - ${rem(70)})` }}>
      <Sidebar />
      <Box p="md" style={{ flex: 1 }}>
        <div>Dashboard Content</div>
      </Box>
    </Flex>
  );
}
