import { Button } from "@/shared/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { ItemGroup } from "@/shared/ui/item";
import { Search } from "lucide-react";


export default function InviteNewUserModal() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Пригласить нового участника</DialogTitle>
                <DialogDescription>Пригласите новых участников в проект</DialogDescription>
            </DialogHeader>
             <div className="flex gap-2">
                <Button variant="outline" size="icon-lg"><Search /></Button>
                <Input placeholder="Поиск участников..."/>
            </div>

            <ItemGroup className="mt-4 space-y-2">
                <p className="text-center text-gray-500">Нету результатов</p>
            </ItemGroup>
        </DialogContent>
    );
}