// src/pages/project-page.tsx (или ваш файл ProjectPage.tsx)
import Header from "@/widgets/header-project/ui";
import Sidebar from "@/widgets/sidebar/ui";
import { useParams } from "react-router-dom";
import { Dialog, DialogTrigger } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { CreateColumntModal } from "@/feature/create-new-column-modal /ui";
import {
  columns_list as columnsMock,
  tasks_list as tasksMock,
  type TaskType,
} from "@/shared/mock/columns";
import Column from "@/widgets/colum/ui";
import { ScrollArea, ScrollBar } from "@/shared/ui/scroll-area";
import { Bot } from "lucide-react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useMemo, useState } from "react";

type ColumnsState = {
  [columnId: string]: {
    id: string;
    title: string;
    color: string;
    tasks: TaskType[];
  };
};

const buildInitialColumns = (): ColumnsState => {
  const map: ColumnsState = {};
  columnsMock.forEach((c) => {
    map[c.id] = {
      id: c.id,
      title: c.title,
      color: c.color,
      tasks: tasksMock.filter((t) => t.columnId === c.id),
    };
  });
  return map;
};

const ProjectPage = () => {
  const { projectId } = useParams();
  const [columns, setColumns] = useState<ColumnsState>(() =>
    buildInitialColumns(),
  );

  const sensors = useSensors(useSensor(PointerSensor));

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = String(active.id);
    const overId = String(over.id);

    // Если перетаскиваемый и over принадлежат той же колонке — используем arrayMove внутри колонки
    let sourceColId: string | null = null;
    let destColId: string | null = null;
    let sourceIndex = -1;
    let destIndex = -1;

    // найти колонку и индекс активной таски
    for (const [colId, col] of Object.entries(columns)) {
      const idx = col.tasks.findIndex((t) => t.id === activeId);
      if (idx !== -1) {
        sourceColId = colId;
        sourceIndex = idx;
      }
      const idxOver = col.tasks.findIndex((t) => t.id === overId);
      if (idxOver !== -1) {
        destColId = colId;
        destIndex = idxOver;
      }
    }

    // случай: перетаскиваем внутри той же колонки (reorder)
    if (sourceColId && destColId && sourceColId === destColId) {
      if (sourceIndex === -1 || destIndex === -1) return;
      if (sourceIndex === destIndex) return;
      setColumns((prev) => {
        const next = structuredClone(prev) as ColumnsState;
        next[sourceColId].tasks = arrayMove(
          next[sourceColId].tasks,
          sourceIndex,
          destIndex,
        );
        return next;
      });
      return;
    }

    // случай: перемещение между колонками (active в одной колонке, over в другой)
    if (sourceColId && destColId && sourceColId !== destColId) {
      setColumns((prev) => {
        const next = structuredClone(prev) as ColumnsState;
        const [moved] = next[sourceColId].tasks.splice(sourceIndex, 1);
        // если overIndex известен — вставляем туда, иначе в начало
        const insertIndex = destIndex !== -1 ? destIndex : 0;
        // обновим columnId у таски
        moved.columnId = destColId;
        next[destColId].tasks.splice(insertIndex, 0, moved);
        return next;
      });
      return;
    }

    // fallback: если over — это id колонки (пользователь уронил на пустую колонку)
    if (sourceColId && columns[overId]) {
      setColumns((prev) => {
        const next = structuredClone(prev) as ColumnsState;
        const [moved] = next[sourceColId].tasks.splice(sourceIndex, 1);
        moved.columnId = overId;
        next[overId].tasks.unshift(moved);
        return next;
      });
      return;
    }
  };

  // helper: получить массив колонок для рендера
  const cols = useMemo(() => Object.values(columns), [columns]);

  return (
    <main className="w-full flex p-4 gap-8 h-screen bg-dots">
      <Sidebar location={String(projectId)} />
      <section className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="h-[calc(100vh-4rem)]">
          <ScrollArea className="h-full">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={onDragEnd}
            >
              <div className="flex flex-nowrap gap-4 p-4 h-full">
                {cols.map((c) => (
                  <div key={c.id} className="w-80 h-full">
                    <ScrollArea className="h-full">
                      <Column
                        columnId={c.id}
                        title={c.title}
                        color={c.color}
                        tasks={c.tasks}
                      />
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
            </DndContext>

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
