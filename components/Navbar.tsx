"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [workSection, setWorkSection] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Mobile:
      // - smartphone
      // - tablet in verticale
      const mobile =
        width <= 768 || (width <= 1024 && height > width);

      setIsMobile(mobile);
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (pathname === "/404work") {
      const savedSection = sessionStorage.getItem("panic-404-section");

      if (savedSection) {
        setWorkSection(savedSection);
      }
    } else {
      setWorkSection(null);
      sessionStorage.removeItem("panic-404-section");
    }
  }, [pathname]);

  const menu = [
    { nome: "HOME", href: "/" },
    { nome: "ARTISTI", href: "/artisti" },
    { nome: "MUSICA", href: "/musica" },
    { nome: "VIDEO", href: "/video" },
    { nome: "SHOP", href: "/404work" },
    { nome: "CONTATTI", href: "/contatti" },
  ];

  function handleNavigation(item: { nome: string; href: string }) {
    if (item.href === "/404work") {
      sessionStorage.setItem("panic-404-section", item.nome);
      setWorkSection(item.nome);
    } else {
      sessionStorage.removeItem("panic-404-section");
      setWorkSection(null);
    }

    setOpen(false);
  }

  function isActive(item: { nome: string; href: string }) {
    if (item.href === "/404work") {
      return pathname === "/404work" && workSection === item.nome;
    }

    if (item.href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(item.href);
  }

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: isMobile ? "70px" : "90px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "0 20px" : "0 40px",
          boxSizing: "border-box",
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
            textDecoration: "none",
          }}
          onClick={() => handleNavigation({ nome: "HOME", href: "/" })}
        >
          <Image
            src="/images/scritta-navbar.png"
            alt="PANIC Records"
            width={400}
            height={67}
            priority
            style={{
              width: isMobile ? "280px" : "400px",
              height: "auto",
              objectFit: "contain",
            }}
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
                key={`${item.nome}-${item.href}`}
                href={item.href}
                onClick={() => handleNavigation(item)}
                style={{
                  color: isActive(item) ? "#cfff04" : "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "18px",
                  transition: "0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#cfff04";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive(item)
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
              key={`${item.nome}-${item.href}`}
              href={item.href}
              onClick={() => handleNavigation(item)}
              style={{
                color: isActive(item) ? "#cfff04" : "white",
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