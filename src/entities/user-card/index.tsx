import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/shared/ui/hover-card";

interface UserCardProps {
  name: string;
  avatar: string;
  email: string;
  fallback: string;
  online: boolean;
}

export default function UserCard({
  name,
  avatar,
  fallback,
  email,
  online,
}: UserCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Avatar
          className={
            !online
              ? "brightness-70 grayscale"
              : "ring-2 ring-green-500 ring-offset-1 ring-offset-white"
          }
        >
          <AvatarImage src={avatar} />
          <AvatarFallback className="bg-primary">{fallback}</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex items-center flex-col p-2">
          <Avatar className="border w-16 h-16">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
          <h1 className="font-semibold text-md text-primary">{name}</h1>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
