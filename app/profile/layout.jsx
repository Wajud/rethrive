"use client";
import ProfileSidebar from "@/app/components/ProfileSidebar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex">
        <ProfileSidebar />
        <div className="">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
