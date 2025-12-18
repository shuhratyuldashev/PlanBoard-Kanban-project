import ProjectDropdown from "@/entities/project-dropdown/ui";
import type { Project } from "@/shared/mock/projects";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/shared/ui/button-group";
import { DropdownMenu, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/shared/ui/item";
import {
  ArrowUpRight,
  Ellipsis,
  Folder,
  FolderOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog } from "@/shared/ui/dialog";
import { CreateProjectModal } from "@/feature/create-new-project-modal/ui";
import DeleteModal from "@/feature/delete-modal/ui";

const ProjectCard = ({ id, name, isPublic }: Project) => {
  const navigate = useNavigate();
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  return (
    <>
    <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <CreateProjectModal
            variant="edit"
            onClose={() => setIsEditOpen(false)}
          />
        </Dialog>

        <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
          <DeleteModal
            variant="delete"
            onClose={() => setIsDeleteOpen(false)}
          />
        </Dialog>
          <Item variant="outline">
      <ItemMedia>
        <Button
          size="icon-lg"
          aria-label={isPublic ? "Public project" : "Private project"}
        >
          {isPublic ? <FolderOpen /> : <Folder />}
        </Button>
      </ItemMedia>

      <ItemContent>
        <ItemTitle>
          {name} 
          <Badge>
          {isPublic ? "Публичный" : "Приватный "}
          </Badge>
          </ItemTitle>
        <ItemDescription>
           10 Участников
        </ItemDescription>
      </ItemContent>

      <ItemActions>
        <ButtonGroup>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate(`/project/${id}`)}
          >
            <ArrowUpRight className="mr-1" />
            Открыть
          </Button>

          <ButtonGroupSeparator />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon-sm">
                <Ellipsis />
              </Button>
            </DropdownMenuTrigger>
            <ProjectDropdown
              setIsEditOpen={setIsEditOpen}
              setIsDeleteOpen={setIsDeleteOpen}
            />
          </DropdownMenu>
          </ButtonGroup>
      </ItemActions>
    </Item>
      </>
  
  );
};

export default ProjectCard;
