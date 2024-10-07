import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Construction Fleet Tracking Solution - Redtail Telematics",
  description: "Optimize your construction business with advanced telematics solutions. Monitor equipment and vehicle usage, track assets in real-time, receive alerts for unauthorized movement, automate maintenance scheduling, enhance job site security with geofencing, and recover stolen equipment with GPS tracking. Improve fleet efficiency, reduce downtime, and lower operational costs with detailed reporting and data insights.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
