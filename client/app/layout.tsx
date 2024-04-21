import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { buildClient } from "@/utils/build-client";
import Nav from "@/components/shared/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "client",
  description: "client",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = buildClient();
  const { data } = await client.get("/api/users/currentuser");
  console.log(data.currentUser);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Nav currentUser={data?.currentUser?.email} />
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-2">
          {children}
        </main>
      </body>
    </html>
  );
}
