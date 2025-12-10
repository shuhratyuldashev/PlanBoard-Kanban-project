import UserAvatar from "@/entities/user-dropdown/ui";
import { ModeToggle } from "@/feature/mode-toggle.tsx";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/ui/input-group";
import ProjectsList from "@/widgets/projects-list/ui";
import { Search, FolderKanban } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="relative w-full flex">
      <div className="fixed top-10 left-5 space-y-4">
        {/* Рекламные баннера */}
        <div className="w-36 h-72 bg-primary/25 border border-primary rounded-lg" />
        <div className="w-36 h-72 bg-primary/25 border border-primary rounded-lg" />
        <div className="w-36 h-72 bg-primary/25 border border-primary rounded-lg" />
      </div>

      <main className="container mx-auto p-4 flex flex-col gap-4">
        <header className="flex justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary ">
            <FolderKanban />
            <p className="text-2xl font-medium">PlanBoard</p>
          </Link>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <UserAvatar />
          </div>
        </header>

        <section className="mt-10 w-[80%] mx-auto">
          <InputGroup className="shadow-none">
            <InputGroupInput className="outline-none" placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </section>

        <ProjectsList />
      </main>

      <div className="fixed right-5 top-10 space-y-4">
        {/* Рекламные баннера */}
        <div className="w-36 h-72 bg-primary/25 border border-primary rounded-lg" />
        <div className="w-36 h-72 bg-primary/25 border border-primary rounded-lg" />
        <div className="w-36 h-72 bg-primary/25 border border-primary rounded-lg" />
      </div>
    </div>
  );
};

export default HomePage;
