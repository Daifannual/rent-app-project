// // app/login/pageView.tsx
// import React from 'react';
// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// interface LoginViewProps {
//   email: string;
//   password: string;
//   setEmail: (value: string) => void;
//   setPassword: (value: string) => void;
//   handleLogin: (e: React.FormEvent) => void;
//   isLoading: boolean;
//   error: any;
// }

// const LoginView: React.FC<LoginViewProps> = ({
//   email,
//   password,
//   setEmail,
//   setPassword,
//   handleLogin,
//   isLoading,
//   error,
// }) => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <Card className="w-[400px]">
//         <CardHeader>
//           <CardTitle>Login</CardTitle>
//           <CardDescription>Masukkan Email dan Password anda</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleLogin}>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   placeholder="Masukkan Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Masukkan Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//             {error && (
//               <p className="text-red-500 text-sm mt-2">
//                 Error: {JSON.stringify(error)}
//               </p>
//             )}
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-between">
//           <Button type="submit" onClick={handleLogin} disabled={isLoading}>
//             {isLoading ? 'Logging in...' : 'Login'}
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default LoginView;









