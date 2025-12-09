import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/shared/ui/item";

export const SettingItem = ({
  icon,
  title,
  description,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: React.ReactNode;
}) => (
  <Item variant="muted">
    <ItemMedia>{icon}</ItemMedia>

    <ItemContent>
      <ItemTitle>{title}</ItemTitle>
      <ItemDescription>{description}</ItemDescription>
    </ItemContent>

    <ItemActions>{action}</ItemActions>
  </Item>
);
