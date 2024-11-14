"use client";
import { List, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react"; // Import icons for open/close
const SidebarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden fixed top-1 right-4 text-white bg-blue-900 p-2 rounded-md z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <List size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-blue-900 text-white p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static w-64 transition-transform duration-300 ease-in-out z-40`}
      >
        <h2 className="text-2xl font-bold mb-6">Adafri Dashboard</h2>
        <nav>
          <ul>
            <Link href="/" passHref>
              <li className="py-2 hover:bg-blue-700 rounded-md px-4 cursor-pointer">
                Dashboard
              </li>
            </Link>
            <Link href="/campaign" passHref>
              <li className="py-2 hover:bg-blue-700 rounded-md px-4 cursor-pointer">
                Campaigns
              </li>
            </Link>
            <Link href="/statistics" passHref>
              <li className="py-2 hover:bg-blue-700 rounded-md px-4 cursor-pointer">
                Statistics
              </li>
            </Link>
          </ul>
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default SidebarComp;
