// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useRegisterMutation } from "@/init/reduxStore/api";

// export function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [register, { isLoading, error }] = useRegisterMutation();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await register({ name, email, password }).unwrap();
//       console.log("Registrasi berhasil:", response);
//       alert("Registrasi berhasil!");
//     } catch (err) {
//       console.error("Registrasi gagal:", err);
//       alert("Registrasi gagal. Silakan coba lagi.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <Card className="w-[400px] mx-2">
//         <CardHeader>
//           <CardTitle>Register</CardTitle>
//           <CardDescription>
//             Masukkan Username, Email, dan Password anda
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit}>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="username">Username</Label>
//                 <Input
//                   id="username"
//                   placeholder="Masukkan Username"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   placeholder="Masukkan Email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   placeholder="Masukkan Password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>
//             {error && (
//               <p className="text-red-500">
//                 Registrasi gagal. Silakan coba lagi.
//               </p>
//             )}
//             <CardFooter className="flex justify-between mt-4">
//               <Button
//                 type="submit"
//                 className="w-full md:w-fit"
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Mendaftar..." : "Kirim"}
//               </Button>
//             </CardFooter>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default Register;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/dataservices/api/api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await register({ name, email, password }).unwrap();
      router.push("/login"); // Redirect ke halaman login setelah registrasi berhasil
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registrasi gagal. Silakan coba lagi.");
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100">
    //   <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
    //     <h2 className="text-2xl font-bold mb-4">Register</h2>
    //     <div className="mb-4">
    //       <label className="block text-sm font-medium mb-2">Name</label>
    //       <input
    //         type="text"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //         className="w-full px-3 py-2 border rounded"
    //         required
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-sm font-medium mb-2">Email</label>
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         className="w-full px-3 py-2 border rounded"
    //         required
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-sm font-medium mb-2">Password</label>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         className="w-full px-3 py-2 border rounded"
    //         required
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       disabled={isLoading}
    //       className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
    //     >
    //       {isLoading ? "Registering..." : "Register"}
    //     </button>
    //   </form>
    // </div>
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Gambar (Sebelah Kiri atau Atas) */}
      <div
        className="lg:w-1/3 w-full h-1/3 lg:h-auto bg-cover bg-center px-6 pt-6 pb-20"
        style={{ backgroundImage: "url('/Backdrop.png')" }}
      >
        <p className="lg:text-4xl text-2xl font-medium  text-white">
          Register sebagai admin
        </p>
        <p className="lg:text-lg text-zinc-200 lg:text-zinc-300">
          Daftarkan akun
        </p>
        {/* Placeholder untuk gambar */}
      </div>

      {/* Form Login (Sebelah Kanan atau Bawah) */}
      <div className="lg:w-2/3 w-full h-2/3 lg:h-auto flex items-center justify-center p-4">
        <Card className="w-full max-w-md rounded-2xl border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Register</CardTitle>
            <CardDescription>
              Masukkan username ,email dan password Anda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Username
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan username"
                  required
                  className="w-full px-3 py-2 rounded-lg"
                />
              </div>
              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan email"
                  required
                  className="w-full px-3 py-2 rounded-lg"
                />
              </div>
              <div>
                <Label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  required
                  className="w-full px-3 py-2 rounded-lg"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-zinc-800 text-white py-2 hover:bg-zinc-700 rounded-lg"
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
