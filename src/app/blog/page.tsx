import React from "react";
import BlogSection from "@/components/sections/blog";

export default function Page() {
  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <BlogSection />
      </div>
    </section>
  );
}