import { useEffect } from "react";

export default function CalculatorPage() {
  const emergency = window.location.hash === "#urgencias";
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Calculadora gestacional | Dr. Alex Mercado";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <iframe
      title="Calculadora gestacional del Dr. Alex Mercado"
      src={`https://calculadora-gestacional.vercel.app/${emergency ? "#urgencias" : ""}`}
      allow="web-share; clipboard-write"
      style={{ display: "block", width: "100%", height: "100dvh", border: 0 }}
    />
  );
}
