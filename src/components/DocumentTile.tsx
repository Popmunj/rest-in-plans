import React, { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <div className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md text-sm">
      {label}
    </div>
  );
};

interface DocTileProps {
  name: string;
  description: string;
  tags: TagProps[];
  route: string;
}

const DocTile: React.FC<DocTileProps> = ({
  name,
  description,
  tags,
  route,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (route) router.push(route);
  };

  return (
    <div
      onClick={handleClick}
      className="p-5 m-5  border border-gray-300 rounded-lg shadow-md bg-white\
      hover:cursor-pointer hover:shadow-xl"
    >
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <Tag key={index} label={tag.label} />
        ))}
      </div>
    </div>
  );
};

export default DocTile;
