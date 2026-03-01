import React from "react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-transparent text-gray-300">
     

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-2xl font-semibold text-white">
              <span className="text-indigo-400">Techquitoes</span> 
            </div>
            <p className="text-sm leading-relaxed">
              Techquitoes Solution offer building user friendly websites
              for growing businesses
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Home",
                "About Us",
                "How It Works",
                "Contact Us",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((link) => (
                <li
                  key={link}
                  className="cursor-pointer transition hover:text-indigo-400"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Core services
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
               e-commerce development
              </li>
              <li className="flex items-center gap-3">
                Data Analytics and Dashboards  
              </li>
              <li className="flex items-center gap-3">
                Chat GPT and AI Development
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              TechQuitoes Solution 
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-1 h-5 w-5 text-indigo-400" />
                <span>
                 near Medicaps school of Excellence , scheme no.140, pipliyahana, Indore, MP
                   India, 110030
                </span>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-indigo-400" />
               hello@techquitoes.com
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-indigo-400" />
                +91-7889822746
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-indigo-500"
                  >
                    <Icon size={16} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p className="text-gray-400">
             Copyright © 2025 Techquitoes Solutions | All Rights Reserved{" "}
            <span className="text-red-500">❤</span> for amazing digital
            experiences.
          </p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-indigo-400">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-indigo-400">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
