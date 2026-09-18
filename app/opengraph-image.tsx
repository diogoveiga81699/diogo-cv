import { ImageResponse } from "next/og";

export const alt = "Diogo Veiga | Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080808",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 110,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            D
            <span style={{ color: "#9A6B4A" }}>V</span>.
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 48,
              fontWeight: 600,
              color: "#f5f5f5",
            }}
          >
            Diogo Veiga | Portfolio
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}