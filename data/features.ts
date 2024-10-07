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
      "Enhance the safety of your construction fleet by monitoring driver behavior. Track critical metrics such as speed, harsh braking, and rapid acceleration to ensure that heavy equipment and vehicles are operated safely, reducing the risk of accidents and equipment damage.",
    icon: FaTruckFast,
  },
  {
    title: "GPS Vehicle & Equipment Tracking",
    description:
      "Monitor the location of your construction vehicles and equipment in real-time with GPS tracking. Ensure assets are where they need to be, prevent unauthorized usage, and improve project efficiency by optimizing fleet movements across job sites.",
    icon: FaMapLocation,
  },
  {
    title: "Crash Reconstruction",
    description:
      "Analyze collisions involving your construction vehicles with detailed crash data. Reconstruct incidents with key information like speed, braking, and impact points, helping to reduce liability and resolve insurance claims more efficiently.",
    icon: FaCarBurst,
  },
  {
    title: "Automated Maintenance Scheduling",
    description:
      "Keep your construction equipment and vehicles in top condition with automated maintenance reminders. Track usage metrics such as engine hours and mileage to ensure timely maintenance, minimizing breakdowns and reducing costly downtime on job sites.",
    icon: FaToolbox,
  },
  {
    title: "Geofencing",
    description:
      "Set up virtual boundaries around job sites to monitor vehicle and equipment entry and exit. Receive alerts when assets move outside of designated areas, enhancing security and ensuring that vehicles and machinery are used only within authorized zones.",
    icon: FaGlobe,
  },
  {
    title: "Stolen Vehicle & Equipment Recovery",
    description:
      "Increase the chances of recovering stolen construction equipment and vehicles with real-time GPS tracking. Get alerts for unauthorized movements and provide law enforcement with precise location data to recover stolen assets quickly.",
    icon: FaLocationPinLock,
  },
  {
    title: "Insurance Premium Reduction",
    description:
      "Lower your insurance premiums by proving enhanced asset security and driver behavior monitoring. Telematics solutions can demonstrate improved safety measures and vehicle tracking, leading to potential cost reductions for construction businesses.",
    icon: FaDollarSign,
  },
  {
    title: "Detailed Fleet Reporting",
    description:
      "Access in-depth reports on the usage of construction vehicles and equipment. Use these analytics to monitor project efficiency, optimize asset utilization, and identify areas for cost savings, making data-driven decisions to improve overall operations.",
    icon: FaChartLine,
  },
  {
    title: "High-Speed Alerts",
    description:
      "Receive alerts when your construction vehicles exceed safe speed limits, especially on and around job sites. High-speed alerts help protect equipment, prevent accidents, and encourage safer operation of heavy machinery.",
    icon: BsSpeedometer,
  },
];
