import HeroAnimation from "@/components/animations/HeroAnimation";
import GitHubCalendar from "@/components/github/GitHubCalendar";
import FadeIn from "@/components/animations/FadeIn";

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
        <section className="min-h-[80vh] flex items-center justify-center px-6 py-20 pt-70">
          <FadeIn className="text-center max-w-4xl" delay={0.2} duration={0.8}>
            <p className="text-zinc-100 text-2xl leading-loose tracking-wide font-medium">
              I'm a Product Engineer at 24Labs, where I'm building consumer apps and internal analytics tools. As a full-stack developer, I build end-to-end solutions. I thrive on the fast-paced cycle of development, deployment, and iteration that drives real product impact.
            </p>
          </FadeIn>
        </section>
        
        {/* Section 2 */}
        <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
          <FadeIn className="text-center" delay={0.2} duration={0.8}>
            <h2 className="text-7xl font-black text-white tracking-wide">Selected Works</h2>
          </FadeIn>
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
