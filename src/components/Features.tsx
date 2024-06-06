"use client";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";

// Directly integrated features data
const features = [
  {
    id: 1,
    title: "Seamless Sync",
    slug: "seamless-sync",
    description: "Automatically sync your files across all devices with ease.",
    isFeatured: true,
    image: "/features/img1.jpg",
  },
  {
    id: 2,
    title: "Top-Notch Security",
    slug: "top-notch-security",
    description: "Keep your data safe with our advanced security features.",
    isFeatured: false,
    image: "/features/img2.jpeg",
  },
  {
    id: 3,
    title: "Anywhere Access",
    slug: "anywhere-access",
    description: "Access your files from anywhere in the world, anytime.",
    isFeatured: true,
    image: "/features/img3.png",
  },
  {
    id: 4,
    title: "Workflow Simplification",
    slug: "workflow-simplification",
    description:
      "Streamline your workflow with our intuitive tools and features.",
    isFeatured: false,
    image: "/features/img4.png",
  },
  {
    id: 5,
    title: "Version Control",
    slug: "version-control",
    description:
      "Track and manage different versions of your files effortlessly.",
    isFeatured: true,
    image: "/features/img5.png",
  },
  {
    id: 6,
    title: "Collaboration Tools",
    slug: "collaboration-tools",
    description:
      "Collaborate with your team in real-time with our built-in tools.",
    isFeatured: false,
    image: "/features/img6.jpg",
  },
];

interface Feature {
  id: number;
  title: string;
  slug: string;
  description: string;
  isFeatured: boolean;
  image: string;
}

function Features() {
  const featuredFeatures = features.filter(
    (feature: Feature) => feature.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED FEATURES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Experience the Best of CloudSyncPro
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredFeatures.map((feature: Feature) => (
            <div key={feature.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {feature.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {feature.description}
                  </p>
                  <Link href={`/features/${feature.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/features"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            View Features
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Features;
