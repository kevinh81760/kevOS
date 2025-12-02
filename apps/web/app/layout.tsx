import "../styles/globals.css";
import NavBar from "@/components/navbar/NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
