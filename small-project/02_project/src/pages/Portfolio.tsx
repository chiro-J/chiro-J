import About from "../components/About";
import Work from "../components/Work";
import TechStacks from "../components/TechStacks";
import Contact from "../components/Contact";

export default function Portfolio() {
  return (
    <section id="home" className="min-h-screen p-8 text-white bg-gray-900">
      <div className="text-4xl font-bold">
        <About />
        <TechStacks />
        <Work />
        <Contact />
      </div>
    </section>
  );
}
