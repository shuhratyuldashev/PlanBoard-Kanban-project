import { FolderKanban } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface SidebarSubItemProps {
  label: string;
  open: boolean;
  path: string;
  current: boolean;
}

export default function SidebarSubItem({
  label,
  open,
  path,
  current,
}: SidebarSubItemProps) {
  const [hover, setHover] = useState(false);

  return (
    <Link to={path}>
      <motion.div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`${current ? "bg-primary text-white" : "hover:bg-border "} relative flex items-center gap-3 px-4 p-2 cursor-pointer rounded-lg transition-colors`}
      >
        <FolderKanban />

        {open ? (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm"
          >
            {label}
          </motion.span>
        ) : (
          <AnimatePresence>
            {hover && (
              <motion.div
                initial={{ opacity: 0, x: 4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 4 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute left-full top-1/2 transform -translate-y-1/2 ml-1 z-50 whitespace-nowrap bg-primary text-white text-xs px-2 py-1 rounded-md shadow-lg"
              >
                {label}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </motion.div>
    </Link>
  );
}
