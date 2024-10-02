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

import { BsSpeedometer } from "react-icons/bs";

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
      "Enhance the safety of your rental fleet by monitoring renter driving behavior. Track key metrics like speed, harsh braking, and rapid acceleration to ensure that vehicles are driven responsibly. Receive alerts for unsafe driving to prevent potential damage or accidents.",
    icon: FaTruckFast,
  },
  {
    title: "GPS Vehicle Tracking",
    description:
      "Keep track of your rental vehicles with GPS tracking. Know the exact location of each vehicle at all times, ensuring timely returns and preventing unauthorized use. Improve customer service by providing accurate vehicle availability information.",
    icon: FaMapLocation,
  },
  {
    title: "Crash Reconstruction",
    description:
      "Accurately analyze collisions involving your rental vehicles with comprehensive crash data. Reconstruct accidents using detailed information on speed, braking, and impact points, helping to resolve claims and reduce liability risks.",
    icon: FaCarBurst,
  },
  {
    title: "Automated Maintenance Scheduling",
    description:
      "Extend the life of your rental fleet with automated maintenance scheduling. Track vehicle health and schedule maintenance based on usage, ensuring that vehicles are well-maintained and minimizing unexpected downtime.",
    icon: FaToolbox,
  },
  {
    title: "Geofencing",
    description:
      "Define virtual boundaries around your rental locations to monitor vehicle entry and exit. Receive instant alerts if a vehicle leaves designated areas, ensuring compliance with rental agreements and enhancing security.",
    icon: FaGlobe,
  },
  {
    title: "Stolen Vehicle Recovery",
    description:
      "Safeguard your rental fleet from theft with tracking and alerts for unauthorized movement. Improve the chances of recovering stolen vehicles quickly and efficiently, reducing potential losses.",
    icon: FaLocationPinLock,
  },
  {
    title: "Insurance Premium Reduction",
    description:
      "Reduce your insurance costs by demonstrating enhanced vehicle security and driver monitoring. Telematics data can help lower premiums by showing insurers that your fleet is equipped with GPS tracking and driver behavior monitoring.",
    icon: FaDollarSign,
  },
  {
    title: "Detailed Fleet Reporting",
    description:
      "Access comprehensive reports on fleet usage, rental duration, and vehicle performance. Use data analytics to make informed decisions on fleet management, improve vehicle utilization, and reduce operational costs.",
    icon: FaChartLine,
  },
  {
    title: "High-Speed Alerts",
    description:
      "Receive instant alerts when a rental vehicle exceeds safe speed limits. High-speed alerts help protect your fleet by encouraging renters to drive responsibly, reducing the risk of accidents and minimizing wear and tear on your vehicles.",
    icon: BsSpeedometer,
  },
];
