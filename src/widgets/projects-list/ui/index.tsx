import ProjectCard from "@/entities/project-card/ui";
import { CreateProjectModal } from "@/feature/create-new-project-modal/ui";
import { projects, type Project } from "@/shared/mock/projects";
import { Dialog, DialogTrigger } from "@/shared/ui/dialog";
import { FolderPlus } from "lucide-react";

const ProjectsList = () => {
  return (
    <section className="mx-auto container mt-6">
      <h1 className="font-medium">Мои Проекты</h1>

      {projects.length == 0 ? (
        <Dialog>
          <DialogTrigger asChild>
            <div className="cursor-pointer hover:bg-primary/20 hover:text-primary duration-300 bg-secondary p-4 rounded-lg flex items-center justify-center text-gray-400">
              <FolderPlus />
            </div>
          </DialogTrigger>

          <CreateProjectModal variant="new" />
        </Dialog>
      ) : (
        <div className="grid grid-cols-4 gap-2 mt-6">
          {projects.map((p: Project) => (
            <ProjectCard key={p.id} {...p} />
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer hover:bg-primary/20 hover:text-primary duration-300 bg-secondary p-4 rounded-lg flex items-center justify-center text-gray-400">
                <FolderPlus />
              </div>
            </DialogTrigger>

            <CreateProjectModal variant="new" />
          </Dialog>
        </div>
      )}
    </section>
  );
};

export default ProjectsList;
