"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const cloudSyncProContent = [
  {
    title: "Effortless Sync Across All Devices",
    description:
      "Seamlessly sync your files across multiple devices without any hassle. CloudSyncPro ensures your data is always up-to-date, no matter where you are or what device you're using.",
  },
  {
    title: "Top-Notch Security",
    description:
      "Protect your data with our state-of-the-art security features. CloudSyncPro uses advanced encryption and security protocols to keep your files safe from unauthorized access.",
  },
  {
    title: "Access Your Files Anytime, Anywhere",
    description:
      "With CloudSyncPro, your files are always at your fingertips. Access your data from anywhere in the world, at any time, using any device with internet access.",
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Collaborate with your team in real-time. CloudSyncPro's collaboration tools enable you to work together seamlessly, no matter where your team members are located.",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Enjoy a smooth and intuitive user experience with CloudSyncPro. Our user-friendly interface makes it easy for you to manage your files and settings without any technical expertise.",
  },
  {
    title: "Scalable Solutions for Your Business",
    description:
      "Whether you're a small business or a large enterprise, CloudSyncPro scales with your needs. Our flexible solutions are designed to grow with your business, ensuring you always have the storage and features you need.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={cloudSyncProContent} />
    </div>
  );
}

export default WhyChooseUs;
