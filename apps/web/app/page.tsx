import HeroAnimation from "@/components/animations/HeroAnimation";
import GitHubCalendar from "@/components/github/GitHubCalendar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <HeroAnimation />
      <div className="absolute top-[calc(75vh-2.5in)] left-1/2 -translate-x-1/2 w-full px-6 flex justify-center">
        <GitHubCalendar />
      </div>
      
      {/* Additional content sections for scroll testing */}
      <div className="relative w-full">
        {/* Section 1 */}
        <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-medium text-white tracking-wide mb-4">Section One</h2>
            <p className="text-zinc-600 text-lg">Scroll down to test navbar behavior</p>
          </div>
        </section>
        
        {/* Section 2 */}
        <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-medium text-white tracking-wide mb-4">Section Two</h2>
            <p className="text-zinc-600 text-lg">Keep scrolling to see the navbar hide and show</p>
          </div>
        </section>
        
        {/* Section 3 */}
        <section className="min-h-[40vh] flex items-center justify-center px-6 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-medium text-white tracking-wide mb-4">Section Three</h2>
            <p className="text-zinc-600 text-lg">Scroll up to see the navbar reappear</p>
          </div>
        </section>
      </div>
    </div>
  );
}
