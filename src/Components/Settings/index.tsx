import "./style.css"

import * as React from "react"

import { IAddLayout, IRemoveLayout } from "../LayoutsHolder"
import { IconButton, Stack } from "@mui/material"

import GeneralSettings from "./General"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import SavedMessage from "./SavedMessage"
import { Wrapper } from "../Pages/TelegramSidebar"

interface ISettingsProps {
  openLayout?: IAddLayout
  removeLayout?: IRemoveLayout
}

const Settings: React.FunctionComponent<ISettingsProps> = ({
  openLayout,
  removeLayout
}) => {
  //Handle open component
  const handleOpenComponent = (item: React.ReactNode) => {
    if (openLayout) openLayout(item)
  }

  return (
    <Stack
      sx={{ p: "8px 16px" }}
      direction="row"
      alignItems="center"
      className="settings"
    >
      <IconButton
        onClick={() =>
          handleOpenComponent(
            <Wrapper title="General Settings" back={removeLayout}>
              <GeneralSettings back={removeLayout} push={handleOpenComponent} />
            </Wrapper>
          )
        }
      >
        <MenuOutlinedIcon />
      </IconButton>
    </Stack>
  )
}

export default Settings
