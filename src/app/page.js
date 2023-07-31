import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import AddJobForm from "@/components/AddJobForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddJobForm />
    </main>
  );
}
