export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #222",
        padding: "35px 20px",
        textAlign: "center",
        color: "#888",
        fontSize: "14px",
      }}
    >
      <p
        style={{
          marginBottom: "12px",
        }}
      >
        © 2026 PANIC Records. Tutti i diritti riservati.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <span style={{ cursor: "pointer" }}>Privacy Policy</span>

        <span style={{ cursor: "pointer" }}>Cookie Policy</span>

        <span style={{ cursor: "pointer" }}>
          Termini e Condizioni
        </span>
      </div>
    </footer>
  );
}