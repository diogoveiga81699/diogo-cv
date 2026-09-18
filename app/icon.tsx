import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
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
          color: "#C18A61",
          fontSize: 28,
          fontWeight: 800,
          fontFamily: "Arial, sans-serif",
          borderRadius: 14,
          border: "2px solid #C18A61",
        }}
      >
        DV.
      </div>
    ),
    {
      ...size,
    }
  );
}