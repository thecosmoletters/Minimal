import './globals.css';

export const metadata = {
  title: 'MINIMAL — Only What Matters.',
  description: 'MINIMAL brand experience concept.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
