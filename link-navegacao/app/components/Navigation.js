"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navigation = ({ navLinks }) => {
  const pathname = usePathname();
  //console.log(pathname)

  const router = useRouter();
  return (
    <nav className="bg-slate-500">
      <ul>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <li
              key={link.name}
              className={isActive ? "bg-red-600" : "bg-slate-500"}
            >
             {/*  <Link href={link.href}>
                {link.name} - {isActive ? "Activo" : ""}
              </Link> */}

              <button type="button" onClick={() => router.push(link.href)}>{link.name}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
