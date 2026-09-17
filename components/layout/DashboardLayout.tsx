"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

export function DashboardLayout({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-slate-50"><Sidebar open={open} onClose={() => setOpen(false)} /><div className="lg:pl-72"><Header title={title} onMenuOpen={() => setOpen(true)} /><main className="mx-auto max-w-7xl p-5 sm:p-8">{children}</main></div></div>;
}
