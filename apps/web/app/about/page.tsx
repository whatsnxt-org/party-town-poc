import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Welcome to the About Page!'
};

export default function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About Page!</p>
    </div>
  );
}