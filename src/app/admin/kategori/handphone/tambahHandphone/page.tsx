"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function TambahHandphone() {
  const handleSimpan = () => {
    console.log("Simpan clicked");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100"> {/* Added background */}
      <div className="w-full p-3 md:w-2/3 lg:w-1/2"> {/* Added responsive width */}
        <Card className="bg-white rounded-lg shadow-md"> {/* Added shadow */}
          <CardHeader className="p-4"> {/* Added padding to header */}
            <CardTitle className="text-xl font-semibold text-gray-800">Tambah Kategori Handphone</CardTitle>
            <CardDescription className="text-gray-600">Tambahkan kategori handphone</CardDescription>
          </CardHeader>
          <CardContent className="p-6"> {/* Added padding to content */}
            <form>
              <div className="grid w-full items-center gap-6">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="nama-handphone" className="text-gray-700">Nama Kategori Handphone</Label>
                  <Input
                    id="nama-handphone"
                    placeholder="Misalnya: iPhone, Samsung, dll."
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" // Added styling to input
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4 mt-6 p-4"> {/* Added padding to footer */}
            <Button onClick={handleSimpan} variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"> {/* Styled the button */}
              Simpan
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default TambahHandphone;