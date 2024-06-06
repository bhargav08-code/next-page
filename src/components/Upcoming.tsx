"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";
function Upcoming() {
  const featuredWebinars = [
    {
      title: "Mastering Cloud Storage",
      description:
        "Learn the ins and outs of cloud storage and how to optimize your usage.",
      slug: "mastering-cloud-storage",
      isFeatured: true,
    },
    {
      title: "Advanced File Synchronization",
      description:
        "Discover advanced techniques for seamless file synchronization across devices.",
      slug: "advanced-file-synchronization",
      isFeatured: true,
    },
    {
      title: "Data Security in the Cloud",
      description:
        "Understand the best practices for keeping your data secure in the cloud.",
      slug: "data-security-in-the-cloud",
      isFeatured: true,
    },
    {
      title: "Real-Time Collaboration Tools",
      description:
        "Explore tools and strategies for effective real-time collaboration with your team.",
      slug: "real-time-collaboration-tools",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Optimizing Workflow with CloudSyncPro",
      description:
        "Learn how to streamline your workflow using CloudSyncPro’s features.",
      slug: "optimizing-workflow-with-cloudsyncpro",
      isFeatured: true,
    },
    {
      title: "Scaling Your Business with Cloud Solutions",
      description:
        "Understand how to leverage cloud solutions to scale your business effectively.",
      slug: "scaling-your-business-with-cloud-solutions",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Elevate Your Cloud Experience
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/webinars/${webinar.slug}`,
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View All Webinars
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
