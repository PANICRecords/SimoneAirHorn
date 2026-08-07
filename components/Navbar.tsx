"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

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
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "18px 20px" : "25px 40px",
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
              fontSize: isMobile ? "26px" : "42px",
            }}
          >
            PANIC
          </span>

          <span
            style={{
              fontWeight: 900,
              fontSize: isMobile ? "26px" : "42px",
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
            width={isMobile ? 30 : 40}
            height={isMobile ? 30 : 40}
          />
        </Link>

        {!isMobile && (
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
                  color: isActive(item.href) ? "#cfff04" : "white",
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
        )}

        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "34px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </header>

      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: open ? 0 : "-100%",
            width: "100%",
            height: "100vh",
            background: "#000",
            transition: ".35s",
            zIndex: 998,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "35px",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: 25,
              right: 25,
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "38px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                color: isActive(item.href) ? "#cfff04" : "white",
                textDecoration: "none",
                fontSize: "30px",
                fontWeight: "bold",
                transition: ".25s",
              }}
            >
              {item.nome}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}