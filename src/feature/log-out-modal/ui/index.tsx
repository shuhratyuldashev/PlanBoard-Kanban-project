import { Button } from "@/shared/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

const LogOutModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Выйти из аккаунта?</DialogTitle>
      </DialogHeader>
      <p>Вы уверены, что хотите выйти из аккаунта?</p>
      <DialogFooter className="grid grid-cols-2">
        <Button size="lg" variant="secondary" onClick={onClose}>
          Отмена
        </Button>
        <Button size="lg" variant="destructive">
          Выйти
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default LogOutModal;
