import * as React from "react"

import { LayoutsHolder } from "../../Components"
import Settings from "../../Components/Settings"

interface ITelegramSidebarProps {}

const TelegramSidebar: React.FunctionComponent<ITelegramSidebarProps> = (
  props
) => {
  return (
    <LayoutsHolder
      width={400}
      transitionTime={100}
      sx={{ bgcolor: (t) => t.palette.grey[200] }}
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
