import Link from "next/link";

const headerStyle = {
  padding: "1rem",
  backgroundColor: "transparent",
  borderBottom: "1px solid #ddd",
  marginBottom: "0.5rem"
};

const navStyle = {
  display: "flex",
  gap: "1rem",
};

const linkStyle = {
  textDecoration: "none",
  color: "#0070f3",
  fontSize: "1.2rem"
};

const navigation = {
  home: { path: "/" },
  contact: { path: "/contact" },
  about: { path: "/about" }
};

// get capitalized text
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default function Header() {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        {Object.entries(navigation).map(([key, link]) => (
          <Link key={link.path} href={link.path} style={linkStyle}>
            {capitalize(key)}
          </Link>
        ))}
      </nav>
    </header>
  );
}
