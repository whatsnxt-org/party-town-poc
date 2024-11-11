import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Welcome to the Home Page!'
};

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
}
