import Button from "../Button";

const Welcome = () => {
  return (
    <div className="flex flex-col lg:px-10 sm:px-6  w-full h-full justify-center bg-slate-200 items-start px-5 py-5\">
      <h1>
        คนไทยกว่า <a className="text-red-600">80%</a>{" "}
        พลาดการรักษาสิทธิของตนในการจัดการความตาย
      </h1>
      <p>
        ให้เราดูแลนิติกรรมของคุณ ตั้งแต่สร้างเอกสารสําคัญ
        จนถึงเก็บเอกสารเพื่อนําส่งเมื่อถึงเวลา และบริการอื่น ๆ อีกมากมาย
      </p>
      <div className="h-10"></div>
      <Button route="register">เริ่มการวางแผน</Button>
    </div>
  );
};

export default Welcome;
