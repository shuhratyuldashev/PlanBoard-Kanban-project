import { motion } from "framer-motion";
import type React from "react";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  open: boolean;
  path: string;
}

export default function SidebarItem({
  icon,
  label,
  open,
  path,
}: SidebarItemProps) {
  return (
    <Link to={path}>
      <motion.div className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-border rounded-lg mx-2 transition-colors">
        {icon}
        {open && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </Link>
  );
}
