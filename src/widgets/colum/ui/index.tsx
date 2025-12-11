// src/widgets/colum/ui.tsx
import DeleteModal from "@/feature/delete-modal/ui";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogTrigger } from "@/shared/ui/dialog";
import { Pen, Trash } from "lucide-react";
import { useState } from "react";
import { TaskItem } from "./task-item";
import type { TaskType } from "@/shared/mock/columns";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CreateTaskModal } from "@/feature/create-new-task-modal/ui";
import { CreateColumntModal } from "@/feature/create-new-column-modal /ui";
// Добавили импорт useDroppable из ядра dnd-kit
import { useDroppable } from "@dnd-kit/core";

export default function Column({
  title,
  color,
  tasks,
  columnId, // Добавляем проп columnId
}: {
  title: string;
  color: string;
  tasks: TaskType[];
  columnId: string; // Типизируем его
}) {
  const [isDeleteColumnModalOpen, setIsDeleteColumnModalOpen] =
    useState<boolean>(false);

  // Делаем саму колонку дроп-зоной
  const { setNodeRef } = useDroppable({
    id: columnId,
    data: {
      type: "column", // Полезно для отладки или сложной логики, но не обязательно
    },
  });

  return (
    // Навешиваем ref на родительский div колонки
    <div
      ref={setNodeRef}
      className={`flex flex-col gap-4 ${color} rounded-lg p-4 h-full`}
    >
      <div
        className={`flex ${color !== "bg-secondary" ? "text-white" : ""}  items-center justify-between`}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <Pen />
              </Button>
            </DialogTrigger>
            <CreateColumntModal variant="edit" />
          </Dialog>

          <Dialog
            open={isDeleteColumnModalOpen}
            onOpenChange={setIsDeleteColumnModalOpen}
          >
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <Trash />
              </Button>
            </DialogTrigger>
            <DeleteModal
              onClose={() => setIsDeleteColumnModalOpen(false)}
              variant="delete-column"
            />
          </Dialog>
        </div>
      </div>

      {/* SortableContext обеспечивает сортировку/отрисовку списка id внутри колонки */}
      <div className="flex-1 overflow-auto">
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex flex-col gap-2">
            {tasks.map((task: TaskType) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </SortableContext>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Добавить задачу</Button>
        </DialogTrigger>
        <CreateTaskModal variant="new" />
      </Dialog>
    </div>
  );
}
