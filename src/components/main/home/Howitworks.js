import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
  InboxIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import Features from "../../reusable/Features";

let featuresInfo = {
  header: "How it works",
  subheader: "When you're expecting!",
  features: [
    {
      id: 1,
      title: "Do more stuff",
      description: "Because laziness is for cowards",
      image: "https://tailwindui.com/img/features/feature-example-1.png",
      subfeatures: [
        {
          id: 1,
          name: "Competitive exchange rates",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: GlobeAltIcon,
        },
        {
          id: 2,
          name: "No hidden fees",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: ScaleIcon,
        },
        {
          id: 3,
          name: "Transfers are instant",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: LightningBoltIcon,
        },
      ],
      cta: { text: "get started", destination: "/" },
    },
    {
      id: 2,
      title: "Do less stuff",
      description: "Because laziness is for cowards",
      image: "https://tailwindui.com/img/features/feature-example-2.png",
      subfeatures: [
        {
          id: 1,
          name: "Mobile notifications",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: AnnotationIcon,
        },
        {
          id: 2,
          name: "Reminder emails",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: MailIcon,
        },
      ],
      cta: { text: "poop more", destination: "/" },
    },
  ],
};

export default function Howitworks() {
  return <Features header={false} featuresInfo={featuresInfo} />;
}
