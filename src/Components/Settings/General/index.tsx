import * as React from "react"

import { IAddLayout, IRemoveLayout } from "../../LayoutsHolder"
import { List, Stack, alpha } from "@mui/material"
import {
  SidebarItem,
  TelegramGalleries,
  Wrapper
} from "../../Pages/TelegramSidebar"

import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import CallOutlinedIcon from "@mui/icons-material/CallOutlined"
import DevicesOtherOutlinedIcon from "@mui/icons-material/DevicesOtherOutlined"
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined"
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined"

interface IGeneralSettingsProps {
  push?: IAddLayout
  back?: IRemoveLayout
}

const GeneralSettings: React.FunctionComponent<IGeneralSettingsProps> = ({
  push,
  back
}) => {
  return (
    <Stack className="settings-component general-settings">
      {/* Telegram galleries */}
      <TelegramGalleries />
      {/* Telegram galleries */}
      <Stack spacing={1}>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            boxShadow: (t) => `0 2px 8px ${alpha(t.palette.common.black, 0.12)}`
          }}
        >
          {[
            {
              title: "+905445110948",
              secondary: "Phone",
              icon: <CallOutlinedIcon />,
              onClick: () => alert("Clicked on phone!")
            },
            {
              title: "mahdi_rasti",
              secondary: "Username",
              icon: <AlternateEmailOutlinedIcon />,
              onClick: () => alert("Clicked on username!")
            },
            {
              title: "Mahdi Rasti",
              secondary: "Bio",
              icon: <InfoOutlinedIcon />,
              onClick: () => alert("Clicked on bio!")
            }
          ].map((item, index) => (
            <SidebarItem key={index} item={item} push={push} />
          ))}
        </List>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {[
            {
              title: "Notifications and sound",
              icon: <NotificationsNoneOutlinedIcon />,
              component: (
                <Wrapper title={"Notifications"} back={back}>
                  Here is good place for items
                </Wrapper>
              )
            },
            {
              title: "Data and storage",
              icon: <FolderOutlinedIcon />,
              component: (
                <Wrapper title={"Data and Storage"} back={back}>
                  Data should be put here!
                </Wrapper>
              )
            },
            {
              title: "Privacy and Security",
              icon: <LockOutlinedIcon />,
              component: (
                <Wrapper title={"Privacy and Securityr"} back={back}>
                  Data should be put here!
                </Wrapper>
              )
            },
            {
              title: "General Settings",
              icon: <SettingsOutlinedIcon />,
              component: (
                <Wrapper title={"General Settings"} back={back}>
                  Data should be put here!
                </Wrapper>
              )
            },
            {
              title: "Chat Folders",
              icon: <FolderOpenOutlinedIcon />,
              component: (
                <Wrapper title={"Chat Folders"} back={back}>
                  Data should be put here!
                </Wrapper>
              )
            },
            {
              title: "Stickers and Emoji",
              icon: <SentimentVerySatisfiedOutlinedIcon />,
              component: (
                <Wrapper title={"Stickers and Emoji"} back={back}>
                  Data should be put here!
                </Wrapper>
              )
            },
            {
              title: "Devices",
              icon: <DevicesOtherOutlinedIcon />,
              component: (
                <Wrapper title={"Devices"} back={back}>
                  Data should be put here!
                </Wrapper>
              )
            },
            {
              title: "Language",
              icon: <TranslateOutlinedIcon />,
              component: (
                <Wrapper title={"Language"} back={back}>
                  Data should be put here!
                </Wrapper>
              )
            }
          ].map((item, index) => (
            <SidebarItem key={index} item={item} push={push} />
          ))}
        </List>
      </Stack>
    </Stack>
  )
}

export default GeneralSettings
