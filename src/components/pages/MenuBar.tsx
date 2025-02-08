interface ItemProps {
  label: string;
  desc: string;
}

const Item: React.FC<ItemProps> = ({ label, desc }) => {
  return (
    <div
      className="flex flex-col w-full h-full items-center justify-start border-x-2 border-slate-200 p-2 lg:pt-10 \
    "
    >
      <h2>{label}</h2>
      <p className="text-small">{desc}</p>
    </div>
  );
};

const MenuBar = () => {
  return (
    <div className="flex flex-col sm:flex-row h-full">
      <Item label="สมุดวางแผน" desc="ตัวช่วยวางแผนอนาคต" />
      <Item label="รายการนิติกรรม" desc="นิติกรรมที่สําคัญ เข้าใจง่าย" />
      <Item label="สร้างเอกสาร" desc="สร้างเอกสาร รวดเร็ว" />
      <Item label="ปรึกษาทนาย" desc="ปรึกษาทนาย" />
    </div>
  );
};

export default MenuBar;
