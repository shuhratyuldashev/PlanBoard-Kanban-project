import { Button } from "@/shared/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

const DeleteProjectModal = ({ onClose, variant }: { onClose: () => void, variant: "delete" | "delete-column" }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{variant === "delete" ? "Удалить проект?" : "Удалить колонку?"}</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        {variant === "delete" ? "Вы уверены, что хотите удалить проект? Это действие необратимо." : "Вы уверены, что хотите удалить колонку? Это действие необратимо."}
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

export default DeleteProjectModal;
