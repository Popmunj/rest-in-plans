import { prisma } from "@/lib/prisma";
import IdCard from "@/components/pages/IdCard";
import Progress from "@/components/pages/Progress";
import Step from "@/components/pages/Step";
const Planner = async () => {
  const user = await prisma.user.findFirst({ where: { id: "0" } });
  return (
    <>
      <main className="flex flex-col lg:flex-row w-full h-wrap p-5 justify-center">
        <div className="flex-[3] flex-col">
          <div className="py-2 px-2 w-full">
            {user ? (
              <IdCard
                imgUrl={user.imgUrl ? user.imgUrl : "/static/ning.png"}
                name={user ? `คุณ ${user.name}` : "ชื่อ"}
                age={user.age ? user.age : "ไม่ระบุอายุ"}
                status={user.status ? user.status : "ไม่ระบุสถานะ"}
                occupation={user.occupation ? user.occupation : "ไม่ระบุอาชีพ"}
              />
            ) : null}
          </div>
          <div className="py-2 px-2 w-full ">
            <Progress />
          </div>
        </div>
        <div className="flex flex-[8] w-full h-full py-2 px-2 items-start">
          <Step />
        </div>
      </main>
    </>
  );
};

export default Planner;
