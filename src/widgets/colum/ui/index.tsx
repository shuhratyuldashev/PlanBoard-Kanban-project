import { CreateColumntModal } from "@/feature/create-new-column-modal /ui";
import DeleteProjectModal from "@/feature/delete-project-modal/ui";
import { tasks_list, type TaskType } from "@/shared/mock/columns";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogTrigger } from "@/shared/ui/dialog";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemMedia, ItemTitle } from "@/shared/ui/item";
import { GripVertical, Pen, Trash } from "lucide-react";
import { useState } from "react";


export default function Column({
    title,
    color
}: {
    title: string;
    color: string;
}) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    return (
        <div className={`flex flex-col gap-4 ${color} rounded-lg p-4`}>
            <div className={`flex ${color !== "bg-secondary" ? "text-white" : ""}  items-center justify-between`}>
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="flex gap-2">
                   <Dialog>
                    <DialogTrigger asChild>
                         <Button variant="ghost"size="icon-sm"><Pen /></Button>
                    </DialogTrigger>
                    <CreateColumntModal variant="edit"/>
                   </Dialog>

                    <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                        <DialogTrigger asChild>
                            <Button variant="ghost" size="icon-sm"><Trash /></Button>
                        </DialogTrigger>
                        <DeleteProjectModal onClose={() => setIsDeleteModalOpen(false)} variant="delete-column"/>
                    </Dialog>
                    </div>
            </div>
            {tasks_list.map((task: TaskType) => (
                <Item className="bg-background" key={task.id}>
                    <ItemMedia>
                        <Button variant="outline">
                            <GripVertical />
                        </Button>
                    </ItemMedia>
                    <ItemContent>
                        <ItemHeader>
                            <div className={`${task.importance === "low" ? "bg-green-500" : task.importance === "medium" ? "bg-yellow-500" : "bg-red-500"} px-2 py-1 rounded-md font-semibold text-white flex items-center justify-center`}>{task.importance}</div>
                        </ItemHeader>
                        <ItemTitle>{task.title}</ItemTitle>
                    <ItemDescription>{task.description}</ItemDescription>
                    <ItemFooter className="grid grid-cols-2">
                        <Button variant="ghost" className="w-full" size="icon-sm"><Pen /></Button>
                        <Button variant="ghost" className="w-full" size="icon-sm"><Trash /></Button>
                    </ItemFooter>
                    </ItemContent>
                </Item>))}
            <Button variant="outline">Добавить задачу</Button>
        </div>
    )
}

