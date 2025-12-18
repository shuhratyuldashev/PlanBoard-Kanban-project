import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, FolderKanban } from "lucide-react";
import { projects } from "@/shared/mock/projects";
import { Link } from "react-router-dom";
import SidebarItem from "./sidebar-item";

export default function Sidebar({ location }: { location: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.aside
      className="rounded-lg bg-secondary text-secondary-foreground flex flex-col py-4 relative"
      animate={{ width: open ? 240 : 64 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Link to="/">
        <div
          className={`flex items-center ${!open && "justify-center"} gap-2 text-primary px-4 py-2`}
        >
          <FolderKanban />
          {open && <p className="text-2xl font-medium">PlanBoard</p>}
        </div>
      </Link>
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

          <AnimatePresence>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="mt-10 border-l-2 border-secondary-foreground p-1.5">
                  {projects.map((project) => (
                    <SidebarItem
                      current={location === project.id}
                      key={project.id}
                      label={project.name}
                      open={open}
                      path={`/project/${project.id}`}
                    />
                  ))}
                </div>
              </motion.div>
          </AnimatePresence>
    </motion.aside>
  );
}
