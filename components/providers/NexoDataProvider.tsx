"use client";
import { createContext, useContext, useState } from "react";
import { schools as initialSchools, students as initialStudents, buses as initialBuses, drivers as initialDrivers, routes as initialRoutes } from "@/data/mockData";
import type { Bus, Driver, Route, School, Student } from "@/types/entities";
type Data = { schools: School[]; students: Student[]; buses:Bus[];drivers:Driver[];routes:Route[]; setSchools: React.Dispatch<React.SetStateAction<School[]>>; setStudents: React.Dispatch<React.SetStateAction<Student[]>>;setBuses:React.Dispatch<React.SetStateAction<Bus[]>>;setDrivers:React.Dispatch<React.SetStateAction<Driver[]>>;setRoutes:React.Dispatch<React.SetStateAction<Route[]>> };
const Context = createContext<Data | null>(null);
export function NexoDataProvider({ children }: { children: React.ReactNode }) { const [schools, setSchools] = useState(initialSchools); const [students, setStudents] = useState(initialStudents);const[buses,setBuses]=useState(initialBuses);const[drivers,setDrivers]=useState(initialDrivers);const[routes,setRoutes]=useState(initialRoutes); return <Context.Provider value={{ schools, students,buses,drivers,routes, setSchools, setStudents,setBuses,setDrivers,setRoutes }}>{children}</Context.Provider>; }
export function useNexoData() { const data = useContext(Context); if (!data) throw new Error("NEXO data provider is missing"); return data; }
