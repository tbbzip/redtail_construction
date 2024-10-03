import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Rental Tracking Solution - Redtail Telematics",
  description: "Optimize your car rental business with advanced telematics solutions. Monitor driver behavior, track vehicles in real-time, receive high-speed alerts, automate maintenance, enhance security with geofencing, and recover stolen vehicles with GPS tracking. Improve fleet efficiency and reduce costs with detailed reporting and potential insurance savings.",
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
