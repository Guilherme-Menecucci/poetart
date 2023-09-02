import Link from "next/link";

const NavItem = ({ children }: React.PropsWithChildren) => (
  <li className="flex items-center p-4 hover:text-black hover:bg-blue-paraiso transition-colors duration-500">
    {children}
  </li>
);

const NavContainer = ({ children }: React.PropsWithChildren) => (
  <nav className="max-w-5xl w-full">
    <ol className="flex h-full">{children}</ol>
  </nav>
);

export default function Navbar() {
  return (
    <header className="border-b border-black dark:border-white font-cedarville text-3xl w-full flex justify-center h-nav">
      <NavContainer>
        <NavItem>
          <Link href="/">Inicio</Link>
        </NavItem>
        <NavItem>
          <Link href="/">Poemas</Link>
        </NavItem>
      </NavContainer>
    </header>
  );
}
