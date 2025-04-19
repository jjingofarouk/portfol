"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
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
            LET&apos;S WORK TOGETHER
          </h2>
          <div className="h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 mx-auto group-hover:w-48 transition-all duration-300"></div>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-xl text-center text-lg">
          Have a project in mind? I'm always open to discussing new opportunities and ideas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Send a Message
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div className="order-1 lg:order-2 flex flex-col space-y-8">
          <div className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Prefer to reach out directly? Contact me through any of these channels:
            </p>
            
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <a
                href={`mailto:${config.email}`}
                className="text-gray-800 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors"
              >
                {config.email}
              </a>
            </div>
            
            {config.social && (
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4 flex items-center">
                  Social Links
                  <ArrowRight className="ml-2 h-4 w-4" />
                </h4>
                <div className="flex flex-wrap gap-4">
                  {/* This would render your social links from config */}
                  {/* Example placeholder for social links */}
                  <div className="bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-3 rounded-full transition-colors cursor-pointer">
                    {/* Social icon would go here */}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-2xl text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
            <p className="mb-6">I'm currently available for freelance work and collaborations.</p>
            <Link 
              href="#contact" 
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