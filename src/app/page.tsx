import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="">
        <div className="relative">
          <img
            src="/Heading.png"
            alt="Heading"
            className="w-full h-96 p-6 object-cover object-bottom rounded-[3rem]"
          />
          <div className="absolute inset-0 flex justify-center p-16">
            <h1 className="font-medium text-3xl md:text-5xl text-white text-center">
              Solusi Praktis untuk Kebutuhan Elektronik Anda!
            </h1>
          </div>
        </div>

        <div className="mt-8 mx-8 text-center">
          <h1 className="text-4xl font-medium">Semua yang Anda butuhkan</h1>
          <div className="mt-4 flex flex-col md:flex-row gap-4 text-zinc-700 font-medium justify-center md:justify-center md:text-left">
            <p className="md:w-2/6">
              Kami menyediakan berbagai alat elektronik seperti kamera
              profesional, laptop gaming, dan handphone dengan kualitas terbaik
              untuk memenuhi kebutuhan Anda.
            </p>

            <p className="md:w-2/6">
              Cukup pilih alat yang Anda inginkan, dan kami akan melayani
              penyewaan Anda. Semua proses dilakukan secara cepat dan mudah.
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mx-10 md:mx-32">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i}>
              <Card>
                <CardHeader>
                  <CardTitle>Iphone 13</CardTitle>
                  <CardDescription>Handphone</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between">
                  <p className="text-sm text-zinc-500">8/128, Black</p>
                  <p className=" font-semibold text-zinc-500">Rp. 35.000</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center my-10">
        <Link href="/barang"><Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-700 text-white">Selengkapnya <MoveUpRight /></Button></Link>
        </div>
      </main>
    </div>
  );
}
