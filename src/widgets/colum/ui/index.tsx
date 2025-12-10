import { CreateColumntModal } from "@/feature/create-new-column-modal /ui";
import { CreateTaskModal } from "@/feature/create-new-task-modal/ui";
import DeleteModal from "@/feature/delete-modal/ui";
import { tasks_list, type TaskType } from "@/shared/mock/columns";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogTrigger } from "@/shared/ui/dialog";
import { Pen, Trash } from "lucide-react";
import { useState } from "react";
import { TaskItem } from "./task-item";

export default function Column({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  const [isDeleteColumnModalOpen, setIsDeleteColumnModalOpen] =
    useState<boolean>(false);

  return (
    <div className={`flex flex-col gap-4 ${color} rounded-lg p-4`}>
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
      {tasks_list.map((task: TaskType) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Добавить задачу</Button>
        </DialogTrigger>
        <CreateTaskModal variant="new" />
      </Dialog>
    </div>
  );
}
