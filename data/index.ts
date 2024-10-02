import { FaLinkedin, FaInstagram, FaFacebook, FaX  } from "react-icons/fa6";

export const testimonials = [
    {
      quote:
        "We have 100 Redtail GPS devices and plan to buy more our company is growing, and as we acquire other businesses we plan to outfit those trucks as well. We especially appreciate the pricing flexibility of the various Redtail service plans. We chose five minute screenshots, which have a lower monthly rate than other GPS companies quoted. The Redtail customer service and tech support have been great, and we have achieved fuel savings. Weve had a very good experience with Redtail. ",
      name: "Vince Zamora",
      title: "Fleet Manager at UCI Consutructions",
    },
    {
      quote:
        "REDTAIL Telematics came to my attention in the very early days of Usage-Based Insurance when young driver coaching and their technology was used to help launch UBI pioneer ingenie. Their products and services have proved insightful and robust, and have evolved with markets as diverse as vehicle tracking, all aspects of fleet management, and most latterly the demands of monetising the connected vehicle.",
      name: "Colin Shillito",
      title: "Head of Business Development at BT Enterprises",
    },
    {
      quote:
        "The Redtail hardware has been selected as a best-in-class device that combines sensitivity, accuracy and commercial performance in a small outline, with excellent technical documentation and support. The combination of the Redtail VAM with their DataWarehouse data storage and device management solution is a winning combination that takes the effort out of driver data acquisition.",
      name: "David Kirby",
      title: "COO at MyDrive Solutions",
    },
    {
      quote:
        "With the second stolen truck we could track its route and all of its stops around Oklahoma City. In 20/20 hindsight we could have set a geo-fence around it and probably nabbed the thief. But it turned out to be a good move just taking our truck back when we did - because a tornado ripped through that neighborhood a couple of days later, and we would have lost it if wed waited. The Redtail GPS tracking works really well for stolen vehicle recovery. We love it Im putting one on my restored 79 Trans Am.",
      name: "Bobby Stringer",
      title: "Owner at Stringer Transports",
    },
    {
      quote:
        "Our company sells and erects pre-engineered steel buildings and we run a small fleet. Im very happy with Redtail GPS. I saved enough in the first week to pay for the tracker and service after terminating three drivers who were late for work, falsifying timesheets and making unauthorized use of the vehicle. The remaining employees are more productive now just knowing that we use Redtail. Its very user-friendly and easy to install. We don’t get great cell coverage where we are but it’s been Johnny on the spot. It showed me both addresses at a job site based on where the truck was parked: it’s that precise! I use it with my iPad and plan to order another unit. Highly recommended.",
      name: "Bryan Weaver",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "T-Mobile",
      img: "/t-mobile.svg",
    },
    {
      id: 2,
      name: "Ford",
      img: "/ford.svg",
    },
    {
      id: 3,
      name: "Jaguar",
      img: "/jaguar.svg",
    },
    {
      id: 4,
      name: "Land Rover",
      img: "/lr.svg",
    },
    {
      id: 5,
      name: "Fujitsu",
      img: "/fujitsu.svg",
    },
    {
      id: 6,
      name: "Admiral",
      img: "/admiral.svg",
    },
    {
      id: 7,
      name: "Tracker",
      img: "/tracker.svg",
    },
  ];

  export const socialMedia = [
    {
      id: 1,
      Icon: FaLinkedin,
      url: "https://www.linkedin.com/company/redtail-telematics",
    },
    {
      id: 2,
      Icon: FaInstagram,
      url: "https://www.instagram.com/redtailtelematics",
    },
    {
      id: 3,
      Icon: FaFacebook,
      url: "https://www.facebook.com/redtailtelematics",
    },
    {
      id: 4,
      Icon: FaX,
      url: "https://www.twitter.com/redtailtele",
    },
  ];
  
  export const pricingRedtail = [
    {
      id: 1,
      title: "Monthly Service Plan",
      desc: "Monthly Standard Service Plan for all HD Products.",
      bulletPoints: [
        "Real-time vehicle tracking",
        "Customizable maps with points of interest",
        "Geofencing with boundary alerts",
        "Monthly billing with no long-term commitment",
        "24/7 customer support",
      ],
      price: "$19.99/month",
      link: "https://secure.redtailtelematics.com/VAM-HSP2.html",
    },
    {
      id: 2,
      title: "Annual Service Plan - Location",
      desc: "Unlimited usage annual service plan.",
      bulletPoints: [
        "One-click vehicle location",
        "User-friendly mobile app and website",
        "Available on Apple App Store and Google Play",
        "Annual subscription with unlimited use",
        "Comprehensive location history",
      ],
      price: "$99.99/year",
      link: "https://secure.redtailtelematics.com/VAA-CLK.html",
    },
    {
      id: 3,
      title: "Annual Service Plan - Tracking",
      desc: "Annual Standard Service Plan for all HD Products.",
      bulletPoints: [
        "Real-time tracking and monitoring",
        "Customizable maps with detailed points of interest",
        "Instant boundary alerts for geofencing",
        "Yearly subscription with significant savings",
        "Detailed trip and usage reports",
      ],
      price: "$199.99/year",
      link: "https://secure.redtailtelematics.com/VAA-HSP2.html",
    },
    {
      id: 4,
      title: "Enterprise Service Plan",
      desc: "Designed for large-scale fleet operations.",
      bulletPoints: [
        "Advanced telematics solutions",
        "Maximize efficiency, safety, and profitability",
        "Comprehensive suite of fleet management features",
        "Customizable to fit enterprise needs",
        "Dedicated account manager and premium support",
      ],
      price: "Contact us for pricing",
      link: "#contact",
    },
  ];


export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is telematics and how does it benefit my car rental business?",
    answer:
      "Telematics refers to the use of GPS and onboard diagnostics to monitor vehicle location, speed, driving behavior, and more. For a car rental business, telematics provides real-time insights into fleet performance, vehicle health, and driver behavior, allowing you to optimize vehicle usage, reduce maintenance costs, and enhance customer safety.",
  },
  {
    question: "How can telematics help reduce my operational costs?",
    answer:
      "Telematics can help reduce costs by providing real-time data on vehicle health and driving habits, which helps identify issues early and reduce wear and tear. It also allows you to monitor fuel consumption, ensure proper vehicle usage, and prevent unauthorized vehicle use, all contributing to lower operational expenses.",
  },
  {
    question: "How do I set up telematics devices in my rental fleet?",
    answer:
      "To set up telematics devices in your rental fleet, you need to purchase compatible GPS tracking devices. Install the devices in your vehicles by following the provided instructions. Once installed, use the telematics platform or app to activate and monitor each vehicle in your fleet.",
  },
  {
    question: "Can telematics improve my fleet’s security?",
    answer:
      "Yes, telematics can significantly improve fleet security. With real-time tracking, you can monitor the location of your vehicles at all times, receive alerts for unauthorized use, and recover stolen vehicles more quickly. Geofencing can also be used to define areas where vehicles are allowed, triggering alerts if they exit the defined zones.",
  },
  {
    question: "How does telematics enhance the customer experience for car rentals?",
    answer:
      "Telematics enhances the customer experience by ensuring vehicles are well-maintained and safe. You can also offer customers added features such as GPS navigation, roadside assistance, and real-time updates on vehicle condition. Additionally, telematics can streamline the check-in and check-out process by ensuring vehicle status is up to date, making rentals quicker and more efficient.",
  },
  {
    question: "What type of data can I track with telematics?",
    answer:
      "Telematics allows you to track a wide range of data, including real-time vehicle location, fuel consumption, mileage, driving behavior (speeding, harsh braking, etc.), and vehicle health diagnostics. This data is invaluable for managing your rental fleet efficiently and ensuring your vehicles are in optimal condition.",
  },
  {
    question: "Can telematics help reduce insurance premiums for my rental fleet?",
    answer:
      "Yes, many insurance providers offer discounts for fleets that utilize telematics, as it promotes safer driving and reduces risk. By monitoring driver behavior and providing data on vehicle usage, you can demonstrate that your fleet is well-managed, potentially leading to lower insurance premiums.",
  },
  {
    question: "How do I access telematics data for my rental vehicles?",
    answer:
      "Accessing telematics data is simple. You can log into the telematics platform via a web dashboard or mobile app. From there, you can view real-time data on vehicle location, performance, and driver behavior, as well as access reports for analysis and decision-making.",
  },
  {
    question: "How can telematics help with maintenance scheduling?",
    answer:
      "Telematics provides real-time data on vehicle health, including engine diagnostics, mileage, and usage patterns. With this information, you can schedule maintenance proactively, preventing breakdowns and reducing downtime, ensuring that your vehicles are always ready for rental.",
  },
  {
    question: "What kind of customer support is available for telematics setup and maintenance?",
    answer:
      "Our customer support team is available to assist you with the setup, maintenance, and troubleshooting of your telematics devices. Support is provided from Monday to Friday, 9:00 AM to 6:00 PM, and for urgent issues, you can contact us via email or phone for prompt assistance.",
  },
];

