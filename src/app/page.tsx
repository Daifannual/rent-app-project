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
              <div className="flex flex-col bg-zinc-100/75 rounded-2xl">
                <div className="px-6 py-8 lg:p-8 lg:pb-6">
                  <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                    <div>
                      <h2 className="text-lg font-medium tracking-tighter text-gray-700 lg:text-3xl">
                        Asus TUF f15
                      </h2>
                      <p className="mt-2 text-sm text-gray-500">Laptop </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Praesentium dolore eveniet repellat!{" "}
                      </p>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <p>
                        <span className="text-xl font-light tracking-tight text-black">
                          95.000
                        </span>
                        <span className="text-base font-medium text-gray-500">
                          {" "}
                          /hari{" "}
                        </span>
                      </p>
                      <p>
                        <span className="flex text-sm text-zinc-500 tracking-tight">
                          stok: <p>8</p>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="w-full flex justify-center my-10">
          <Link href="/barang">
            <Button className="rounded-full text-white">
              Selengkapnya <MoveUpRight />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
