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
          justifyContent: "space-between",
          background: "#f4ece0",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 14, width: "100%" }}>
            <div style={{ flex: 1, background: "#0039A6" }} />
            <div style={{ flex: 1, background: "#FFFFFF" }} />
            <div style={{ flex: 1, background: "#D52B1E" }} />
          </div>
          <div style={{ display: "flex", height: 14, width: "100%" }}>
            <div style={{ flex: 1, background: "#006847" }} />
            <div style={{ flex: 1, background: "#FFFFFF" }} />
            <div style={{ flex: 1, background: "#CE1126" }} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#D52B1E",
              marginBottom: 20,
            }}
          >
            Comunidad chilena en México
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1,
              color: "#1c1614",
              fontWeight: 600,
              display: "flex",
            }}
          >
            <span style={{ color: "#D52B1E" }}>Chile</span>
            <span style={{ margin: "0 18px" }}>en</span>
            <span style={{ color: "#006847" }}>México</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              color: "#5a4e46",
              maxWidth: 760,
            }}
          >
            Comunidad, encuentros y un pedacito de casa.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", width: 72, height: 48 }}>
            <div style={{ width: 24, height: 48, background: "#0039A6" }} />
            <div style={{ width: 24, height: 48, background: "#FFFFFF" }} />
            <div style={{ width: 24, height: 48, background: "#D52B1E" }} />
          </div>
          <div style={{ display: "flex", width: 72, height: 48 }}>
            <div style={{ width: 24, height: 48, background: "#006847" }} />
            <div style={{ width: 24, height: 48, background: "#FFFFFF" }} />
            <div style={{ width: 24, height: 48, background: "#CE1126" }} />
          </div>
          <div style={{ fontSize: 24, color: "#0039A6" }}>
            Eventos · Amistad · Bienvenida
          </div>
        </div>
      </div>
    ),
    size,
  );
}
