import { ImageResponse } from "next/og";

export const runtime = "edge";

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
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#080808",
          color: "#f5f5f5",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        {/* glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 900,
            borderRadius: "9999px",
            background: "rgba(154,107,74,0.22)",
            filter: "blur(140px)",
          }}
        />

        {/* border */}
        <div
          style={{
            position: "absolute",
            inset: 32,
            borderRadius: 28,
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "72px 78px",
          }}
        >
          {/* top */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 44,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              D<span style={{ color: "#9A6B4A" }}>V</span>.
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 20,
                color: "#a1a1aa",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "9999px",
                  background: "#9A6B4A",
                }}
              />
              diogo-cv.vercel.app
            </div>
          </div>

          {/* center */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              maxWidth: 760,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 1,
                  background: "#9A6B4A",
                }}
              />

              <div
                style={{
                  fontSize: 18,
                  textTransform: "uppercase",
                  letterSpacing: "0.35em",
                  color: "#B47C55",
                }}
              >
                Computer Engineering Student
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 88,
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: "-0.06em",
              }}
            >
              <span>Diogo</span>
              <span style={{ color: "#71717a" }}>Veiga.</span>
            </div>

            <div
              style={{
                fontSize: 28,
                lineHeight: 1.5,
                color: "#a1a1aa",
                maxWidth: 700,
              }}
            >
              Portfolio pessoal com formação, experiência, projetos e
              conhecimentos na área da tecnologia.
            </div>
          </div>

          {/* bottom */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 14,
              }}
            >
              <div
                style={{
                  padding: "14px 24px",
                  borderRadius: 9999,
                  background: "#9A6B4A",
                  color: "white",
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                Portfolio
              </div>

              <div
                style={{
                  padding: "14px 24px",
                  borderRadius: 9999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#f5f5f5",
                  fontSize: 22,
                }}
              >
                PT / EN
              </div>
            </div>

            <div
              style={{
                fontSize: 22,
                color: "#71717a",
              }}
            >
              Diogo Veiga | Portfolio
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