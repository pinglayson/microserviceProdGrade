import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import App from "./app";
import { buildClient } from "@/utils/build-client";

import { AuthProvider } from "@/providers/AuthProvider";

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

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <App user={data?.currentUser?.email}>{children}</App>
        </AuthProvider>
      </body>
    </html>
  );
}
