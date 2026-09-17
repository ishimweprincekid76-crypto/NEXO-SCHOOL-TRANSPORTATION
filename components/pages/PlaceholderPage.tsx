import type { LucideIcon } from "lucide-react";
import { Construction } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/PageHeader";
export function PlaceholderPage({ title, description, icon }: { title: string; description: string; icon: LucideIcon }) { return <DashboardLayout title={title}><PageHeader title={title} description={description} icon={icon} /><section className="mt-8 grid min-h-72 place-items-center rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center"><div><span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"><Construction size={26} aria-hidden="true" /></span><h3 className="mt-5 text-lg font-semibold text-slate-950">Coming in the next stage</h3><p className="mt-2 max-w-md text-sm leading-6 text-slate-600">This workspace is prepared and will be available as NEXO grows.</p></div></section></DashboardLayout>; }
