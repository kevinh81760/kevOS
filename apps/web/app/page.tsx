import HeroAnimation from "@/components/animations/HeroAnimation";
import GitHubCalendar from "@/components/github/GitHubCalendar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <HeroAnimation />
      <div className="absolute top-[calc(75vh-2.5in)] left-1/2 -translate-x-1/2 w-full px-4 md:px-8 lg:px-12 flex justify-center">
        <GitHubCalendar />
      </div>
    </div>
  );
}
