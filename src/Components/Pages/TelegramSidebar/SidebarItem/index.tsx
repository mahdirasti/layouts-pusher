import * as React from "react"

import { ListItem, ListItemIcon, ListItemText, alpha, ListItemAvatar, Avatar } from "@mui/material"

import { IAddLayout } from "../../../LayoutsHolder"

export interface ISidebarItem {
  title: string
  secondary?: string
  icon?: React.ReactNode
  component?: React.ReactNode
  onClick?: () => void
  avatar?: string
}

interface ISidebarItemProps {
  push?: IAddLayout
  item: ISidebarItem
}

const SidebarItem: React.FunctionComponent<ISidebarItemProps> = ({
  push,
  item
}) => {
  return (
    <ListItem
      onClick={() =>
        item.component
          ? push && push(item.component)
          : item?.onClick
          ? item.onClick()
          : null
      }
      sx={{
        cursor: "pointer",
        [`&:hover`]: {
          bgcolor: (t) => alpha(t.palette.common.black, 0.02)
        }
      }}
    >
      {item?.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
      {item?.avatar && <ListItemAvatar>
                <Avatar
                  alt={item.title}
                  src={item.avatar}
                />
              </ListItemAvatar>}
      <ListItemText
        id={item.title.toLowerCase().replaceAll(" ", "-")}
        primary={item.title}
        secondary={item.secondary}
      />
    </ListItem>
  )
}

export default SidebarItem
