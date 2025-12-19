import { Link } from '@tanstack/react-router';

export function Header() {
  return (
    <nav>
      {/* TanStack Router provides type-safe links to your defined paths */}
      <Link to="/" activeProps={{ style: { fontWeight: 'bold' } }}>
        Home
      </Link>
      <Link to="/dashboard" activeProps={{ style: { fontWeight: 'bold' } }}>
        Dashboard
      </Link>
    </nav>
  );
}
