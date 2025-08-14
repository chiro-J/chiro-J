export default function Header() {
  const navItems = ["Home", "About", "Tech Stacks", "Contact"];

  return (
    <nav className="fixed z-50 w-full px-8 py-4 text-white bg-black-800 backdrop-blur-lg">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        {/* 로고 */}
        <div className="text-xl font-bold">chiro-J</div>

        <div className="flex gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="transition-colors mx-8"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
