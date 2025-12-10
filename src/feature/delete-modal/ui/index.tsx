import { Button } from "@/shared/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

const DeleteModal = ({
  onClose,
  variant,
}: {
  onClose: () => void;
  variant: "delete" | "delete-column" | "delete-task";
}) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          {variant === "delete" ? "Удалить проект?" : ""}
          {variant === "delete-column" ? "Удалить колонку?" : ""}
          {variant === "delete-task" ? "Удалить задачу?" : ""}
        </DialogTitle>
      </DialogHeader>
      <DialogDescription>
        {variant === "delete"
          ? "Вы уверены, что хотите удалить проект? Это действие необратимо."
          : variant === "delete-column"
            ? "Вы уверены, что хотите удалить колонку? Это действие необратимо."
            : "Вы уверены, что хотите удалить задачу? Это действие необратимо."}
      </DialogDescription>
      <DialogFooter className="grid grid-cols-2">
        <Button size="lg" variant="secondary" onClick={onClose}>
          Отмена
        </Button>
        <Button size="lg" variant="destructive">
          Удалить
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DeleteModal;
