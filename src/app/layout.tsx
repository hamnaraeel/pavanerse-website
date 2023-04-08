import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Panaverse",
  description: "Panaverse website by hamnaraeel",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/static/favicon.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
