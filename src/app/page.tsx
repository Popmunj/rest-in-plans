"use client";
import Button from "../components/Button";
import HeaderTabs from "../components/HeaderTabs";
import Footer from "../components/Footer";
import Welcome from "../components/pages/Welcome";
import Image from "next/image";
import MenuBar from "@/components/pages/MenuBar";

export default function Page() {
  return (
    <div>
      <HeaderTabs isIn={false} />
      <main className="flex flex-col w-screen h-screen">
        <div className="flex flex-[3] lg:flex-[5] flex-row">
          <div className="flex-[1]">
            <Welcome />
          </div>
          <div className="flex-[2] hidden relative lg:block justify-center items-center h-full w-full">
            <Image
              src={"/static/hospital-bed.jpg"}
              alt="Image"
              fill
              className="object-cover opacity-70"
            />
          </div>
        </div>
        <div className="flex-[2] h-full relative">
          <MenuBar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
