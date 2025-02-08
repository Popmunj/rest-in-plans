interface IdCardProps {
  name: string;
  age: string | number;
  status: string;
  occupation: string;
  imgUrl: string;
}

const IdCard: React.FC<IdCardProps> = ({
  name,
  age,
  status,
  occupation,
  imgUrl,
}) => {
  return (
    <div className="w-full max-w-xs p-4 bg-white shadow-md  rounded-lg border border-gray-300 flex flex-col items-center">
      <div className="w-24 h-24 mb-4">
        <img
          src={imgUrl}
          alt="Profile"
          className="w-full h-full rounded-full object-cover border-2 border-gray-300"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">อายุ {age}</p>
        <p className="text-sm text-gray-600">สถานะ {status}</p>
        <p className="text-sm text-gray-600">{occupation}</p>
      </div>
    </div>
  );
};

export default IdCard;
