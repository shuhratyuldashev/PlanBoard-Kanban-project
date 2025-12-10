import type { Project } from "@/shared/mock/projects";
import { Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, name, isPublic }: Project) => {
  return (
    <Link
      to={`/project/${id}`}
      className="relative p-4 bg-primary text-white font-semibold rounded-lg"
    >
      <div className="absolute -top-3 left-0 w-[40%] h-5 bg-primary rounded-t-lg"></div>
      <div className="flex justify-between mt-2">
        <div>
          <p className="text-xl">{name}</p>
          <p className="opacity-80">12 задач</p>
        </div>
        <div>
          <div className="flex items-center justify-center rounded-full p-1 text-primary bg-white">
            {isPublic ? <Globe size={18} /> : <Lock size={18} />}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
