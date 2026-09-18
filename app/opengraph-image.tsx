import { ImageResponse } from "next/og";

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
          background: "#080808",
          color: "#f5f5f5",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: 220,
            width: 700,
            height: 700,
            borderRadius: "9999px",
            background: "rgba(193, 138, 97, 0.18)",
            filter: "blur(90px)",
          }}
        />

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "70px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: 650,
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 28,
                color: "#C18A61",
                fontSize: 26,
                letterSpacing: 6,
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 2,
                  background: "#C18A61",
                  marginRight: 18,
                }}
              />
              Estudante de Engenharia Informática
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 0.92,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  fontSize: 108,
                  fontWeight: 800,
                }}
              >
                Diogo
              </span>

              <span
                style={{
                  fontSize: 108,
                  fontWeight: 800,
                  color: "#8E8B98",
                }}
              >
                Veiga.
              </span>
            </div>

            <div
              style={{
                fontSize: 30,
                lineHeight: 1.4,
                color: "#c9c9cf",
                maxWidth: 620,
              }}
            >
              Portfolio com projetos, formação, experiência e contactos.
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 40,
                gap: 18,
              }}
            >
              <div
                style={{
                  padding: "14px 24px",
                  borderRadius: 999,
                  background: "#C18A61",
                  color: "#ffffff",
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                diogo-cv.vercel.app
              </div>
            </div>
          </div>

          <div
            style={{
              width: 260,
              height: 260,
              borderRadius: 36,
              border: "2px solid rgba(193,138,97,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#111111",
              zIndex: 2,
              boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
              alignSelf: "center",
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "#C18A61",
              }}
            >
              DV.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}