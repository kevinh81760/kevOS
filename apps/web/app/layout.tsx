import "../styles/globals.css";
import NavBar from "@/components/navbar/NavBar";
import SmoothScroll from "@/components/providers/SmoothScroll";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white relative min-h-screen overflow-x-hidden">
        <SmoothScroll>
          {/* Multi-layered background system */}
          <div className="fixed inset-0 -z-10">
            {/* Layer 1: Static gradient base */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                background: "linear-gradient(-45deg, #000000, #0a0a0a, #121212, #0d0d0d)",
              }}
            />
            
            {/* Layer 2: Static gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
            
            {/* Layer 3: Radial gradient accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-zinc-900/30 to-transparent blur-3xl" />
            
            {/* Layer 4: Horizontal ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[300px] bg-gradient-to-r from-transparent via-zinc-700/10 to-transparent blur-[100px]" />
          </div>
          
          <NavBar />
          <main className="pt-20">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
