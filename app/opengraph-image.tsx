import { ImageResponse } from "next/og";
import { profile } from "@/content/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.fullName} — ${profile.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#ffffff",
          borderBottom: "24px solid #0F766E",
          padding: "0 96px",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 700, color: "#0F172A" }}>
          {profile.fullName}
        </div>
        <div style={{ marginTop: 24, fontSize: 44, color: "#0F766E" }}>
          {profile.tagline}
        </div>
      </div>
    ),
    size,
  );
}
