import Footer from "@/components/Footer";
import HeaderTabs from "@/components/HeaderTabs";

import Planner from "@/components/pages/Planner";
import DocumentGen from "@/components/pages/DocumentGen";
const Home = async () => {
  const warnList0 = [
    { name: "ผู้รับประโยชน์", desc: "" },
    { name: "สินทรัพย์", desc: "" },
  ];

  return (
    <>
      <HeaderTabs isIn />
      <main
        className="flex flex-row w-screen min-h-screen relative overflow-auto pt-2 lg:pt-2 h-screen p-5 \
      justify-start items-start"
      >
        <DocumentGen
          type="พินัยกรรม (แบบเขียนเองทั้งฉบับ)"
          description="พินัยกรรม คือ คำสั่งครั้งสุดท้าย ซึ่งแสดงเจตนากำหนดการเผื่อตายในเรื่องทรัพย์สินหรือ กิจการต่าง ๆ ของผู้ทำพินัยกรรม เพื่อที่จะเกิดผลบังคับตามกฎหมายในเมื่อผู้ทำพินัยกรรมถึงแก่ความตาย โดยทำแบบใดแบบหนึ่งที่กฎหมายกำหนดไว้ (ป.พ.พ. มาตรา 1646 – 1648)"
          warnList={warnList0}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
