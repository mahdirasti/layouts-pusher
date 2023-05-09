import "./App.css"

import * as React from "react"

import { LayoutsHolder } from "./Components"
import Settings from "./Components/Settings"

function App() {
  return (
    <div className="layouts-pusher-project">
      <LayoutsHolder width={300}>
        {(add, remove) => {
          return (
            <Settings
              {...(add ? { openLayout: add } : {})}
              {...(remove ? { removeLayout: remove } : {})}
            />
          )
        }}
      </LayoutsHolder>
    </div>
  )
}

export default App
