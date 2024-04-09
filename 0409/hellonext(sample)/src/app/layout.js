import "@/styles/globals.css";

export const metadata = {
  title: "Hello Next",
  description: "The first Next.js site",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
