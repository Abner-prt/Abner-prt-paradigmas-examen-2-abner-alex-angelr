import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Formulario" },
    { to: "/mensual", label: "Proyección Mensual" },
    { to: "/anual", label: "Proyección Anual" },
  ];

  return (
    <nav className="sticky top-6 z-50 mx-auto flex justify-center px-4">
      <div className="flex items-center justify-center w-full max-w-5xl">

        {/* Barra de navegación central */}
        <div className="flex items-center p-1.5 bg-[#201d2a]/80 backdrop-blur-xl rounded-full shadow-2xl border border-white/10 gap-1">
          {links.map((link) => {
            const isActive = location.pathname === link.to;

            if (isActive) {
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 p-[1.5px] shadow-[0_0_15px_rgba(192,132,252,0.4)] transition-transform duration-300"
                >
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-[#1c1626] px-5 py-2 text-sm font-medium text-white tracking-wide">
                    {link.label}
                  </span>
                </Link>
              );
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full px-5 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white tracking-wide"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
};
