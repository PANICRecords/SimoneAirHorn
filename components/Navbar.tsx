"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menu = [
    { nome: "HOME", href: "/" },
    { nome: "ARTISTI", href: "/artisti" },
    { nome: "MUSICA", href: "/musica" },
    { nome: "VIDEO", href: "/video" },
    { nome: "CONTATTI", href: "/contatti" },
  ];

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 40px",
        background: "rgba(0,0,0,.70)",
        backdropFilter: "blur(12px)",
        zIndex: 999,
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            color: "#cfff04",
            fontWeight: 900,
            fontSize: "42px",
          }}
        >
          PANIC
        </span>

        <span
          style={{
            fontWeight: 900,
            fontSize: "42px",
          }}
        >
          <span style={{ color: "#cfff04" }}>R</span>
          <span style={{ color: "#00ffca" }}>E</span>
          <span style={{ color: "#ff00c1" }}>C</span>
          <span style={{ color: "#cfff04" }}>O</span>
          <span style={{ color: "#00ffca" }}>R</span>
          <span style={{ color: "#ff00c1" }}>D</span>
          <span style={{ color: "#cfff04" }}>S</span>
        </span>

        <Image
          src="/images/logo.png"
          alt="PANIC Records"
          width={40}
          height={40}
        />
      </Link>

      <nav
        style={{
          display: "flex",
          gap: "35px",
        }}
      >
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              color: isActive(item.href)
                ? "#cfff04"
                : "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
              transition: "0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#cfff04";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = isActive(item.href)
                ? "#cfff04"
                : "white";
            }}
          >
            {item.nome}
          </Link>
        ))}
      </nav>
    </header>
  );
}