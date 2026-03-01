import {
  MessageSquare,
  Lightbulb,
  Code,
  Rocket,
} from "lucide-react";

export const steps = [
  {
    id: "01",
    title: "Discovery & Consultation",
    desc: "We start by understanding your business goals, target audience, and project requirements through detailed discussions.",
    icon: MessageSquare,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "02",
    title: "Planning & Strategy",
    desc: "Our team creates a comprehensive project plan with timelines, milestones, and technology stack recommendations.",
    icon: Lightbulb,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "03",
    title: "Development & Testing",
    desc: "We build your solution using agile methodologies with regular updates and rigorous testing at every stage.",
    icon: Code,
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: "04",
    title: "Launch & Support",
    desc: "After successful deployment, we provide ongoing support, maintenance, and updates to ensure optimal performance.",
    icon: Rocket,
    gradient: "from-orange-500 to-red-500",
  },
];