"use client";
import ProfileSidebar from "/app/components/ProfileSidebar";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";

export default function Layout({ children }) {
  return (
    <div>
      <LoggedInNavbar />
      <div className="flex">
        <ProfileSidebar />
        <div className="">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
