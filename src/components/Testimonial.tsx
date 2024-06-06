"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const cloudSyncProTestimonials = [
  {
    quote:
      "CloudSyncPro has revolutionized the way our team collaborates. The seamless sync and real-time access have significantly improved our productivity.",
    name: "Alex Johnson",
    title: "Project Manager",
  },
  {
    quote:
      "The security features of CloudSyncPro give me peace of mind knowing our sensitive data is protected. It's an indispensable tool for our business.",
    name: "Samantha Lee",
    title: "IT Specialist",
  },
  {
    quote:
      "Accessing my files from anywhere has never been easier. CloudSyncPro's user-friendly interface makes managing my documents a breeze.",
    name: "Michael Chen",
    title: "Freelance Designer",
  },
  {
    quote:
      "CloudSyncPro's real-time collaboration tools have transformed our workflow. We can now easily share and edit documents together, no matter where we are.",
    name: "Emily Taylor",
    title: "Marketing Director",
  },
  {
    quote:
      "As our business grew, CloudSyncPro scaled effortlessly to meet our needs. It's a must-have for any company looking to streamline their file management.",
    name: "Chris Morales",
    title: "Business Owner",
  },
];

function Testimonial() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear from Our Users: Success Stories
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={cloudSyncProTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
