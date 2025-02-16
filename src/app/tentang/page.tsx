import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Tentang Kami
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Kami adalah tim yang berdedikasi untuk memberikan solusi inovatif dan
          layanan berkualitas tinggi kepada pelanggan kami. Dengan fokus pada
          kepuasan pelanggan, kami terus berkembang untuk memenuhi kebutuhan
          Anda.
        </p>
      </section>

      {/* Our Mission and Values */}
      <section className="py-2">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-600 dark:text-indigo-400">
                Misi Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Misi kami adalah menyediakan produk dan layanan berkualitas
                tinggi yang membantu pelanggan mencapai tujuan mereka. Kami
                percaya bahwa inovasi dan kolaborasi adalah kunci kesuksesan.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-600 dark:text-indigo-400">
                Nilai-Nilai Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Inovasi: Selalu mencari cara baru untuk meningkatkan layanan.
                </li>
                <li>
                  Integritas: Menjaga transparansi dan kejujuran dalam setiap
                  langkah.
                </li>
                <li>
                  Kepuasan Pelanggan: Fokus utama kami adalah kebahagiaan
                  pelanggan.
                </li>
                <li>Kolaborasi: Bekerja sama untuk mencapai hasil terbaik.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Sewa Barang Kami Sekarang
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Dengan sewa barang kami, Anda dapat menikmati berbagai keuntungan!
          Hemat biaya, tidak perlu membeli barang baru, dan dapat memilih barang
          yang sesuai dengan kebutuhan Anda. Sewa sekarang dan rasakan
          keuntungannya!
        </p>
        <Link href={"/"}>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600">
            Jelajahi Barang
          </Button>
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="py-8 bg-slate-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Alasan Memilih Kami
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {/* Item 1 */}
            <AccordionItem
              value="item-1"
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition duration-300 ease-in-out">
                <span>Apa yang membuat kami berbeda?</span>
                {/* Hapus SVG ini karena sudah disediakan oleh shadcn/ui */}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600 dark:text-gray-400">
                Kami berbeda karena fokus kami pada inovasi, pelayanan pelanggan
                yang luar biasa, dan komitmen untuk selalu memberikan solusi
                terbaik.
              </AccordionContent>
            </AccordionItem>

            {/* Item 2 */}
            <AccordionItem
              value="item-2"
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition duration-300 ease-in-out">
                <span>Bagaimana cara kami bekerja?</span>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg> */}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600 dark:text-gray-400">
                Kami bekerja dengan pendekatan kolaboratif, mendengarkan
                kebutuhan pelanggan, dan memberikan solusi yang disesuaikan
                dengan kebutuhan spesifik mereka.
              </AccordionContent>
            </AccordionItem>

            {/* Item 3 */}
            <AccordionItem
              value="item-3"
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition duration-300 ease-in-out">
                <span>Produk yang Kami Tawarkan?</span>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg> */}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600 dark:text-gray-400">
                Handphone & Smartphone : Berbagai merek ternama untuk
                komunikasi, fotografi, atau pekerjaan. 
                Laptop & Komputer :
                Spesifikasi tinggi untuk kerja, desain grafis, editing, atau
                browsing. 
                Kamera & Aksesoris Fotografi : DSLR, mirrorless, dan
                aksesoris untuk profesional maupun pemula.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
    </div>
  );
}
