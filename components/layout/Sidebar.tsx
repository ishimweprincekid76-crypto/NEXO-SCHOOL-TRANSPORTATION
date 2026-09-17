"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bus, GraduationCap, House, Route, School, Settings, Users, X } from "lucide-react";
import { Brand } from "@/components/ui/Brand";

const navigation = [
  { href: "/", label: "Dashboard", icon: House }, { href: "/schools", label: "Schools", icon: School },
  { href: "/students", label: "Students", icon: GraduationCap }, { href: "/buses", label: "Buses", icon: Bus },
  { href: "/drivers", label: "Drivers", icon: Users }, { href: "/routes", label: "Routes", icon: Route },
];

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  return <><button aria-label="Close navigation" onClick={onClose} className={`fixed inset-0 z-30 bg-slate-950/30 lg:hidden ${open ? "block" : "hidden"}`} />
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-72 -translate-x-full flex-col border-r border-slate-200 bg-white p-5 transition-transform lg:translate-x-0 ${open ? "translate-x-0" : ""}`}>
      <div className="flex items-center justify-between px-2"><Brand /><button onClick={onClose} aria-label="Close navigation" className="rounded-lg p-2 text-slate-500 lg:hidden"><X size={20} /></button></div>
      <nav aria-label="Primary navigation" className="mt-10 flex flex-1 flex-col gap-1">{navigation.map(({ href, label, icon: Icon }) => <Link key={href} href={href} onClick={onClose} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${pathname === href ? "bg-teal-50 text-teal-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"}`}><Icon size={19} aria-hidden="true" />{label}</Link>)}</nav>
      <Link href="/settings" onClick={onClose} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${pathname === "/settings" ? "bg-teal-50 text-teal-700" : "text-slate-600 hover:bg-slate-100"}`}><Settings size={19} aria-hidden="true" />Settings</Link>
    </aside></>;
}
