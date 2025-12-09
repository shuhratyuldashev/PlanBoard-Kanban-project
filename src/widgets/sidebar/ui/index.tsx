import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Home, ChevronDown, FolderKanban } from "lucide-react";
import SidebarItem from "./sidebar-item";
import SidebarSubItem from "./sidebar-sub-item";
import { projects } from "@/shared/mock/projects";

export default function Sidebar({ location }: { location: string }) {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <motion.aside
      className="h-full rounded-lg bg-secondary text-secondary-foreground flex flex-col py-4 relative"
      animate={{ width: open ? 240 : 64 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div
        className={`flex items-center ${!open && "justify-center"} gap-2 text-primary px-4 py-2`}
      >
        <FolderKanban />
        {open && <p className="text-2xl font-medium">PlanBoard</p>}
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="absolute -right-4 top-4 bg-primary p-2 rounded-full shadow-lg hover:bg-primary transition-colors"
      >
        <motion.div
          animate={{ rotate: open ? 90 : 270 }}
          transition={{ duration: 0.2 }}
          className="flex items-center text-white"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <nav className="mt-10 flex flex-col gap-1">
        <SidebarItem icon={<Home />} label="Главная" open={open} path="/" />

        <div>
          <motion.div
            onClick={() => setProjectsOpen(!projectsOpen)}
            className={`flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-primary hover:text-white ${
              projectsOpen ? "bg-primary text-white" : ""
            } rounded-lg mx-2 transition-colors`}
          >
            {open && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="text-sm flex-1"
              >
                Проекты
              </motion.span>
            )}

            <motion.div
              animate={{ rotate: projectsOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <ChevronDown size={16} />
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {projectsOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="mt-1 border-l-2 border-secondary-foreground p-1.5">
                  {projects.map((project) => (
                    <SidebarSubItem
                      current={location === project.id}
                      key={project.id}
                      label={project.name}
                      open={open}
                      path={`/project/${project.id}`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.aside>
  );
}
