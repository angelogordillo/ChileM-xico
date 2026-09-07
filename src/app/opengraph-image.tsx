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
          padding: "72px",
        }}
      >
        <div
          style={{
            height: 10,
            width: "100%",
            display: "flex",
            background: "linear-gradient(90deg, #9b1d2e 0 33%, #fff8f0 33% 66%, #17324f 66%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#9b1d2e",
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
            }}
          >
            Chile en México
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
        <div style={{ fontSize: 24, color: "#17324f" }}>
          Eventos · Amistad · Bienvenida
        </div>
      </div>
    ),
    size,
  );
}
