import Footer from "@/components/Footer";
import HeaderTabs from "@/components/HeaderTabs";

import Planner from "@/components/pages/Planner";
import DocumentGen from "@/components/pages/DocumentGen";
const Home = async () => {
  const warnList0 = [{ name: "โรคต่าง ๆ", desc: "" }];

  return (
    <>
      <HeaderTabs isIn />
      <main
        className="flex flex-row w-screen min-h-screen relative overflow-auto pt-2 lg:pt-2 h-screen p-5 \
      justify-start items-start"
      >
        <DocumentGen
          type="DNR (คำสั่งปฏิเสธการกู้ชีพ)"
          description={`คำสั่งปฏิเสธการกู้ชีพ เป็นสัญญาทางกฎหมายที่ผู้ป่วยหรือผู้มีอำนาจแทนผู้ป่วยได้ทำไว้กับโรงพยาบาลหรือผู้ให้การรักษาว่าไม่ต้องการให้เริ่มการนวดหัวใจผายปอดกู้ชีพหรือการกู้ชีพขั้นสูงในกรณีที่ผู้ป่วยหยุดหายใจหรือหัวใจหยุดเต้น ตามความต้องการของผู้ป่วย ("คำสั่งปฏิเสธการกู้ชีพ", วิกิพีเดีย สารานุกรมเสรี)`}
          warnList={warnList0}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
