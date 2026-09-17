import type { Metadata } from "next";
import "./globals.css";
import { NexoDataProvider } from "@/components/providers/NexoDataProvider";
export const metadata: Metadata = { title: "NEXO | School Transportation", description: "School transportation management platform" };
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en"><body><NexoDataProvider>{children}</NexoDataProvider></body></html>; }
