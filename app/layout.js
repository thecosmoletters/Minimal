import './globals.css';

export const metadata = {
  title: 'MENIMAL — Only What Matters.',
  description: 'MENIMAL brand experience concept.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
