import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          background: "#faf9f6",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", gap: 28, marginBottom: 48 }}>
          <div style={{ display: "flex", width: 96, height: 64, border: "1px solid #e6e2da" }}>
            <div style={{ width: 32, height: 64, background: "#0039A6" }} />
            <div style={{ width: 32, height: 64, background: "#FFFFFF" }} />
            <div style={{ width: 32, height: 64, background: "#D52B1E" }} />
          </div>
          <div style={{ display: "flex", width: 96, height: 64, border: "1px solid #e6e2da" }}>
            <div style={{ width: 32, height: 64, background: "#006847" }} />
            <div style={{ width: 32, height: 64, background: "#FFFFFF" }} />
            <div style={{ width: 32, height: 64, background: "#CE1126" }} />
          </div>
        </div>
        <div
          style={{
            fontSize: 72,
            lineHeight: 1,
            color: "#1c1614",
            fontWeight: 600,
          }}
        >
          Chile en México
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#5c564f",
          }}
        >
          Comunidad y empresas
        </div>
      </div>
    ),
    size,
  );
}
