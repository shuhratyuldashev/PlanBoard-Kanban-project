import Header from "@/widgets/header-project/ui";
import Sidebar from "@/widgets/sidebar/ui";
import { useParams } from "react-router-dom";
import { Dialog, DialogTrigger } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { CreateColumntModal } from "@/feature/create-new-column-modal /ui";
import { columns_list, type ColumnType } from "@/shared/mock/columns";
import Column from "@/widgets/colum/ui";
import { ScrollArea, ScrollBar } from "@/shared/ui/scroll-area";
import { Bot } from "lucide-react";

const ProjectPage = () => {
  const { projectId } = useParams();
  return (
    <main className="w-full flex p-4 gap-8 h-screen bg-dots">
      <Sidebar location={String(projectId)} />
      <section className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Главное пространство под колонки */}
        <div className="h-[calc(100vh-4rem)]">
          {/* Горизонтальный скролл для всех колонок */}
          <ScrollArea className="h-full">
            <div className="flex flex-nowrap gap-4 p-4 h-full">
              {columns_list.map((c: ColumnType) => (
                <div key={c.id} className="w-80 h-full">
                  {/* Внутри колонки – вертикальный скролл */}
                  <ScrollArea className="h-full">
                    <Column title={c.title} color={c.color} />
                    <ScrollBar orientation="vertical" />
                  </ScrollArea>
                </div>
              ))}

              <div className="w-80">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" size="lg" className="w-full">
                      Добавить новую колонку
                    </Button>
                  </DialogTrigger>
                  <CreateColumntModal variant="new" />
                </Dialog>
              </div>
            </div>

            {/* горизонтальный скролл */}
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <Button
            className="fixed right-7 bottom-7 hover:scale-110 duration-300 cursor-pointer"
            size="icon-lg"
          >
            <Bot size={35} />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
