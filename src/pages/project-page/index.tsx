import Header from "@/widgets/header-project/ui";
import Sidebar from "@/widgets/sidebar/ui";
import { useParams } from "react-router-dom";
import { Dialog, DialogTrigger } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { CreateColumntModal } from "@/feature/create-new-column-modal /ui";
import { columns_list, type ColumnType } from "@/shared/mock/columns";
import Column from "@/widgets/colum/ui";

const ProjectPage = () => {
  const { projectId } = useParams();
  return (
    <main className="w-full flex p-4 gap-8 h-screen bg-dots">
      <Sidebar location={String(projectId)} />
      <section className="flex-1">
        <Header />
        <div className="mt-4">
            <div className="grid grid-cols-6 gap-4  overflow-x-scroll overflow-y-scroll">
                {columns_list.map((c: ColumnType) => (
                    <Column key={c.id} title={c.title} color={c.color} />
                ))}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="secondary" size="lg">Добавить новую колону</Button>
                    </DialogTrigger>
                    <CreateColumntModal variant="new"/>
                </Dialog>
            </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
