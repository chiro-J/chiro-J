import nameTypho from "../../assets/name_typho-white.png";

export default function Header() {
  const navItems = ["Home", "About", "Tech Stacks", "Work", "Contact"];

  return (
    <nav className="fixed z-50 w-full px-8 py-2 text-white bg-black-800 backdrop-blur-sm">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        {/* 로고 */}
        <div className="">
          <a href="#">
            <img
              src={nameTypho}
              alt="name_typho"
              className="h-[40px] object-contain"
            />
          </a>
        </div>

        <div className="flex gap-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="transition-colors mx-4"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
