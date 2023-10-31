"use client";
import "./globals.css";
import React from "react";
import GraphQlProvider from "@/app/providers/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/app/components/header/header";
import { Footer } from "@/app/components/footer/footer";
import { ThemeContextProvider } from "@/app/context/ThemeContext";
import ThemeProvider from "./providers/ThemeProvider";
import { AuthProvider } from "@/app/context/authContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <body>
          <AuthProvider>
            <GraphQlProvider>
              <ThemeContextProvider>
                <ThemeProvider>
                  <Header />
                  {children}
                  <Footer />
                </ThemeProvider>
              </ThemeContextProvider>
            </GraphQlProvider>
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
