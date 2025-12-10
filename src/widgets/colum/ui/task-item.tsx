import { Button } from "@/shared/ui/button";
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemHeader,
  ItemTitle,
  ItemDescription,
  ItemFooter,
} from "@/shared/ui/item";
import { GripVertical, Pen, Trash } from "lucide-react";
import { Dialog, DialogTrigger } from "@/shared/ui/dialog";
import { CreateTaskModal } from "@/feature/create-new-task-modal/ui";
import DeleteModal from "@/feature/delete-modal/ui";
import { useState } from "react";
import type { TaskType } from "@/shared/mock/columns";

export function TaskItem({ task }: { task: TaskType }) {
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] =
    useState<boolean>(false);
  return (
    <Item className="bg-background" key={task.id}>
      <ItemMedia>
        <Button variant="ghost">
          <GripVertical />
        </Button>
      </ItemMedia>
      <ItemContent>
        <ItemHeader>
          <div
            className={`${task.importance === "low" ? "bg-green-500" : task.importance === "medium" ? "bg-yellow-500" : "bg-red-500"} px-2 py-1 rounded-md font-semibold text-white flex items-center justify-center`}
          >
            {task.importance == "low"
              ? "Низкий"
              : task.importance == "medium"
                ? "Средний"
                : "Высокий"}
          </div>
        </ItemHeader>
        <ItemTitle>{task.title}</ItemTitle>
        <ItemDescription>{task.description}</ItemDescription>
        <ItemFooter className="grid grid-cols-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="w-full" size="icon-sm">
                <Pen />
              </Button>
            </DialogTrigger>
            <CreateTaskModal variant="edit" />
          </Dialog>
          <Dialog
            open={isDeleteTaskModalOpen}
            onOpenChange={setIsDeleteTaskModalOpen}
          >
            <DialogTrigger asChild>
              <Button variant="ghost" className="w-full" size="icon-sm">
                <Trash />
              </Button>
            </DialogTrigger>
            <DeleteModal
              onClose={() => setIsDeleteTaskModalOpen(false)}
              variant="delete-task"
            />
          </Dialog>
        </ItemFooter>
      </ItemContent>
    </Item>
  );
}
