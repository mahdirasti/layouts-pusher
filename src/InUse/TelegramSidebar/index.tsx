import * as React from "react"

import { LayoutsHolder } from "../../Components"
import Settings from "../../Components/Settings"
import { alpha } from "@mui/material"

interface ITelegramSidebarProps {}

const TelegramSidebar: React.FunctionComponent<ITelegramSidebarProps> = (
  props
) => {
  return (
    <LayoutsHolder
      width={400}
      transitionTime={200}
      sx={{
        bgcolor: (t) => t.palette.grey[200],
        border: 1,
        borderColor: (t) => alpha(t.palette.common.black, 0.05)
      }}
      hasBlur
    >
      {(add, remove) => {
        return (
          <Settings
            {...(add ? { openLayout: add } : {})}
            {...(remove ? { removeLayout: remove } : {})}
          />
        )
      }}
    </LayoutsHolder>
  )
}

export default TelegramSidebar
