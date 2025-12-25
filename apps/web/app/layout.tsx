import "../styles/globals.css";
import LoadingProvider from "@/components/providers/LoadingProvider";
import LoadingScreen from "@/components/loading/LoadingScreen";
import AppContent from "./AppContent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white relative min-h-screen overflow-x-hidden bg-transparent">
        <LoadingProvider>
          <LoadingScreen />
          <AppContent>{children}</AppContent>
        </LoadingProvider>
      </body>
    </html>
  );
}
