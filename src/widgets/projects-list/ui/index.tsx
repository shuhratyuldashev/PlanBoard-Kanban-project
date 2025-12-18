import { useState } from "react";
import ProjectCard from "@/entities/project-card/ui";
import { CreateProjectModal } from "@/feature/create-new-project-modal/ui";
import { projects, type Project } from "@/shared/mock/projects";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogTrigger } from "@/shared/ui/dialog";
import { FolderOpen, Plus } from "lucide-react";
import { ButtonGroup } from "@/shared/ui/button-group";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/ui/select";

type Tab = "my" | "all" | "recent";

const ProjectsList = () => {
  const [activeTab, setActiveTab] = useState<Tab>("my");

  const myProjects = projects.filter((p) => p.isYour);
  const allProjects = [...projects];
  const recentProjects = projects.slice(0, 5);

  let visibleProjects: Project[] = [];
  if (activeTab === "my") visibleProjects = myProjects;
  else if (activeTab === "all") visibleProjects = allProjects;
  else if (activeTab === "recent") visibleProjects = recentProjects;

  return (
    <section className="mx-auto container mt-6">
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="font-medium text-lg">Проекты</h1>

        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger defaultValue="all">Выберите тип проекта</SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все</SelectItem>
              <SelectItem value="my">Публичные</SelectItem>
              <SelectItem value="recent">Приватные</SelectItem>
            </SelectContent>
          </Select>
          <ButtonGroup>
            <Button
              size="sm"
              variant={activeTab === "my" ? "default" : "secondary"}
              onClick={() => setActiveTab("my")}
            >
              Мои
            </Button>
            <Button
              size="sm"
              variant={activeTab === "all" ? "default" : "secondary"}
              onClick={() => setActiveTab("all")}
            >
              Все
            </Button>
            <Button
              size="sm"
              variant={activeTab === "recent" ? "default" : "secondary"}
              onClick={() => setActiveTab("recent")}
            >
              Недавние
            </Button>
          </ButtonGroup>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus />
                Создать новый проект
              </Button>
            </DialogTrigger>
            <CreateProjectModal variant="new" />
          </Dialog>
        </div>
      </header>

      {visibleProjects.length === 0 ? (
        <div className="w-full h-24 flex flex-col justify-center items-center text-gray-500 mt-6">
          <FolderOpen className="mb-2" />
          <h1 className="text-center">У вас пока отсутствуют проекты</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {visibleProjects.map((p: Project) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsList;
