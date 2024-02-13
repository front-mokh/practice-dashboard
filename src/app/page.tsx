import GoToDashboard from "@/components/goToDashboard/GoToDashboard";
import Image from "next/image";
import {Italiana} from "next/font/google"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GoToDashboard />
    </main>
  );
}
