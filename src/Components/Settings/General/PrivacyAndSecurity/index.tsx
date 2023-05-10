import * as React from "react"

import { IAddLayout, IRemoveLayout } from "../../../LayoutsHolder"
import { List, Stack } from "@mui/material"
import { SidebarItem, Wrapper } from "../../../Pages/TelegramSidebar"

import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import BlockedUsers from "./BlockedUsers"
import DevicesOtherOutlinedIcon from "@mui/icons-material/DevicesOtherOutlined"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined"

interface IPrivacyAndSecurityProps {
  push?: IAddLayout
  back?: IRemoveLayout
}

const PrivacyAndSecurity: React.FunctionComponent<IPrivacyAndSecurityProps> = ({
  push,
  back
}) => {
  return (
    <Stack spacing={2}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {[
          {
            title: "Blocked Users",
            secondary: "27 Users",
            icon: <PersonOffOutlinedIcon />,
            component: (
              <Wrapper title={"Blocked Users"} back={back}>
                <BlockedUsers />
              </Wrapper>
            )
          },
          {
            title: "Two-Step Verification",
            secondary: "On",
            icon: <LockOutlinedIcon />,
            component: (
              <Wrapper title={"Two-Step Verification"} back={back}>
                Here is good place for items
              </Wrapper>
            )
          },
          {
            title: "Active Sessions",
            secondary: "7 Devices",
            icon: <DevicesOtherOutlinedIcon />,
            component: (
              <Wrapper title={"Active Sessions"} back={back}>
                Here is good place for items
              </Wrapper>
            )
          },
          {
            title: "Connected Websites",
            secondary: "1 Website",
            icon: <AlternateEmailOutlinedIcon />,
            component: (
              <Wrapper title={"Connected Websites"} back={back}>
                Here is good place for items
              </Wrapper>
            )
          }
        ].map((item, index) => (
          <SidebarItem key={index} item={item} push={push} />
        ))}
      </List>
    </Stack>
  )
}

export default PrivacyAndSecurity
