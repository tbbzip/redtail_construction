import {
  FaTruckFast,
  FaMapLocation,
  FaToolbox,
  FaGlobe,
  FaDollarSign,
  FaLocationPinLock,
  FaChartLine,
  FaCarBurst,
} from "react-icons/fa6";
import { IconType } from "react-icons";

export interface FeatureType {
  title: string;
  description: string;
  icon: IconType;
}

export const features: FeatureType[] = [
  {
    title: "Driver Behavior Monitoring",
    description:
      "Improve driver safety and performance by tracking driving behaviors such as speed, harsh braking, and rapid acceleration. Receive alerts for unsafe driving practices and generate detailed behavior reports.",
    icon: FaTruckFast,
  },
  {
    title: "Vehicle Tracking",
    description:
      "Monitor your fleet in real-time with accurate GPS tracking. Get instant updates on vehicle locations, routes, and stops to enhance fleet visibility and ensure timely deliveries.",
    icon: FaMapLocation,
  },
  {
    title: "Crash Reconstruction",
    description:
      "Accurately reconstruct vehicle collisions with detailed data from GPS tracking and onboard sensors. Analyze factors such as speed, braking patterns, and impact points to understand the events leading up to and during a crash.",
    icon: FaCarBurst,
  },
  {
    title: "Maintenance Scheduling",
    description:
      "Keep your fleet in top condition with automated maintenance reminders and scheduling. Track vehicle health and schedule maintenance based on mileage, engine hours, or specific time intervals.",
    icon: FaToolbox,
  },
  {
    title: "Geofencing",
    description:
      "Set up virtual boundaries (geofences) to monitor vehicle entry and exit in specific areas. Receive instant alerts when vehicles enter or leave designated zones, enhancing security and compliance.",
    icon: FaGlobe,
  },
  {
    title: "Stolen Vehicle Recovery",
    description:
      "Increase the chances of recovering stolen vehicles with real-time GPS tracking. Receive instant alerts if a vehicle is moved without authorization and provide law enforcement with precise location data to facilitate quick and efficient recovery.",
    icon: FaLocationPinLock,
  },
  {
    title: "Insurance Savings",
    description:
      "Potentially lower your insurance premiums by informing your provider that your fleet is equipped with GPS tracking devices. Demonstrating enhanced fleet security and driver monitoring can lead to significant savings.",
    icon: FaDollarSign,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your fleet performance with detailed reports and analytics. Customize reports to track key metrics, identify trends, and make data-driven decisions to improve fleet efficiency and reduce costs.",
    icon: FaChartLine,
  },
];
