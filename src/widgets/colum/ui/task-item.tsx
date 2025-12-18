// src/widgets/colum/task-item.tsx
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
import DeleteModal from "@/feature/delete-modal/ui";
import { useState } from "react";
import type { TaskType } from "@/shared/mock/columns";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CreateTaskModal } from "@/feature/create-new-task-modal/ui";
import { Badge } from "@/shared/ui/badge";

export function TaskItem({ task }: { task: TaskType }) {
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] =
    useState<boolean>(false);

  // useSortable возвращает сеттер ref, трансформ/transition для анимации,
  // и drag-listeners/attributes, которые мы можем поместить на handle.
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "task",
      columnId: task.columnId,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // optional: слегка поднять таску при drag
    zIndex: isDragging ? 40 : "auto",
  } as React.CSSProperties;

  return (
    // Item wrapper оставляем, но навешиваем ref и стиль от useSortable
    <Item
      className="bg-background"
      ref={setNodeRef as any}
      style={style}
      key={task.id}
    >
      <ItemMedia>
        <Button variant="ghost" {...attributes} {...listeners}>
          <GripVertical />
        </Button>
      </ItemMedia>
      <ItemContent>
        <ItemHeader>
          <Badge
           variant={task.importance === "low" ? "success" : task.importance === "medium" ? "warning" : "destructive"}
          >
            {task.importance === "low"
              ? "Низкий"
              : task.importance === "medium"
                ? "Средний"
                : "Высокий"}
          </Badge>
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
