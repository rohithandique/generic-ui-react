import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Separator,
  IconButton,
  Dialog,
  Text,
} from '@radix-ui/themes';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import ReactLogo from '@/shared/assets/react.svg?react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Box
      style={{
        borderBottom: '1px solid var(--gray-a3)',
        backgroundColor: 'var(--color-background)',
        height: '60px',
      }}
    >
      <Container size="4" style={{ height: '100%' }}>
        <Flex
          align="center"
          justify="between"
          px="4"
          style={{ height: '100%' }}
        >
          <ReactLogo width={30} height={30} />

          {/* Desktop Navigation */}
          <Flex
            align="center"
            gap="6"
            display={{ initial: 'none', sm: 'flex' }}
          >
            <Link
              href="#"
              weight="medium"
              color="gray"
              highContrast
              underline="none"
            >
              Home
            </Link>
          </Flex>

          {/* Desktop Actions */}
          <Flex
            align="center"
            gap="3"
            display={{ initial: 'none', sm: 'flex' }}
          >
            <Button variant="soft" color="gray">
              Log in
            </Button>
            <Button>Sign up</Button>
          </Flex>

          {/* Mobile Burger Menu (Using Dialog as Drawer replacement) */}
          <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <Dialog.Trigger>
              <Box display={{ sm: 'none' }}>
                <IconButton variant="ghost" color="gray">
                  <HamburgerMenuIcon width="24" height="24" />
                </IconButton>
              </Box>
            </Dialog.Trigger>

            <Dialog.Content
              style={{
                maxWidth: '100vw',
                height: '100vh',
                margin: 0,
                borderRadius: 0,
                padding: 'var(--space-4)',
              }}
            >
              <Flex justify="between" align="center" mb="4">
                <Text size="4" weight="bold">
                  Menu
                </Text>
                <Dialog.Close>
                  <IconButton variant="ghost" color="gray">
                    <Cross1Icon />
                  </IconButton>
                </Dialog.Close>
              </Flex>

              <Separator size="4" mb="4" />

              <Flex direction="column" gap="4">
                <Link
                  href="#"
                  size="4"
                  weight="medium"
                  color="gray"
                  highContrast
                  underline="none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </Flex>

              <Separator size="4" my="4" />

              <Flex direction="column" gap="3">
                <Button variant="soft" color="gray" size="3">
                  Log in
                </Button>
                <Button size="3">Sign up</Button>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </Flex>
      </Container>
    </Box>
  );
}
