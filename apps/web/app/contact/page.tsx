import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Welcome to the Contact Page!'
};

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Welcome to the Contact Page!</p>
    </div>
  );
}