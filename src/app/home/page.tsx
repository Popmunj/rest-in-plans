import Footer from "@/components/Footer";
import HeaderTabs from "@/components/HeaderTabs";

import Planner from "@/components/pages/Planner";

const Home = async () => {
  return (
    <>
      <HeaderTabs isIn />
      <main
        className="flex flex-row w-screen min-h-screen relative overflow-auto pt-2 lg:pt-2 h-screen p-5 \
      justify-start items-start"
      >
        <Planner />
      </main>
      <Footer />
    </>
  );
};

export default Home;
