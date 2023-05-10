import * as React from "react"

import { List, Stack, Typography } from "@mui/material"

import { SidebarItem } from "../../../../Pages/TelegramSidebar"

interface IBlockedUsersProps {}

const BlockedUsers: React.FunctionComponent<IBlockedUsersProps> = (props) => {
  return (
    <Stack>
      <Typography component="p" sx={{ p: 2 }}>
        Blocked users can't send you messages or add you to groups. They will
        not see your profile photos, online and last seen status.
      </Typography>
      <List sx={{ bgcolor: (t) => t.palette.common.white }}>
        {[
          {
            title: "John Wick",
            secondary: "@john_wick",
            avatar: "https://mui.com/static/images/avatar/1.jpg"
          },
          {
            title: "Joe Bloggs",
            secondary: "@joe_bloggs",
            avatar: "https://mui.com/static/images/avatar/2.jpg"
          },
          {
            title: "Auchterturra",
            secondary: "@auchterturra",
            avatar: "https://mui.com/static/images/avatar/3.jpg"
          },
          {
            title: "La mama dracului",
            secondary: "@la_mama_dracului",
            avatar: "https://mui.com/static/images/avatar/4.jpg"
          },
          {
            title: "Waikikamukau",
            secondary: "@waikikamukau",
            avatar: "https://mui.com/static/images/avatar/5.jpg"
          },
          {
            title: "Juan Perez",
            secondary: "@juan_perez",
            avatar: "https://mui.com/static/images/avatar/6.jpg"
          },
          {
            title: "Schmilblick",
            secondary: "@schmilblick",
            avatar: "https://mui.com/static/images/avatar/7.jpg"
          },
          {
            title: "Emma Johnson",
            secondary: "@emmajohnson",
            avatar: "https://mui.com/static/images/avatar/8.jpg"
          },
          {
            title: "Liam Davis",
            secondary: "@liamdavis",
            avatar: "https://mui.com/static/images/avatar/9.jpg"
          },
          {
            title: "Ava Thompson",
            secondary: "@avathompson",
            avatar: "https://mui.com/static/images/avatar/10.jpg"
          },
          {
            title: "Benjamin Lee",
            secondary: "@benjaminlee",
            avatar: "https://mui.com/static/images/avatar/11.jpg"
          }
        ].map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Stack>
  )
}

export default BlockedUsers
