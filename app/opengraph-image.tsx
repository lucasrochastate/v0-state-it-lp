import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "State | Consultoria em Tecnologia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0d0f12",
          color: "#e0e4e8",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          STATE
          <span style={{ color: "#2dd4a8" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Seu software pode ser{" "}
            <span style={{ color: "#2dd4a8" }}>melhor</span>.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#7a8494",
              maxWidth: 720,
              lineHeight: 1.4,
            }}
          >
            Engenharia de software, segurança e dados — sem enrolação.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
