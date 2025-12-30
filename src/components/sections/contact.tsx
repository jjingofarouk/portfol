"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 min-h-screen max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <Link href={"#contact"} className="group">
          <h2
            className={cn(
              "bg-clip-text text-5xl font-bold tracking-tight text-transparent text-center md:text-7xl",
              "bg-gradient-to-r from-black to-gray-600",
              "dark:bg-gradient-to-r dark:from-white dark:to-gray-400",
              "transition-all duration-300"
            )}
          >
            LET'S WORK TOGETHER
          </h2>
          <div className="h-1 w-0 bg-gradient-to-r from-blue-500 to-teal-500 mt-2 mx-auto group-hover:w-48 transition-all duration-300"></div>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-xl text-center text-lg">
          Have a project in mind? Let's discuss.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                Send a Message
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                I'll get back to you very fast
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                action="mailto:jjingofaroukk@gmail.com"
                method="POST"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-teal-600 transition-colors"
                >
                  Send Email
                </button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="order-1 lg:order-2">
          <div className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm currently available for freelance work and collaborations.
            </p>
            <Link
              href="mailto:jjingofaroukk@gmail.com"
              className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Let's talk details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;