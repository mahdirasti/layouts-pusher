import "./style.css"

import * as React from "react"

import { IAddLayout, IRemoveLayout } from "../LayoutsHolder"

import GeneralSettings from "./General"
import SavedMessage from "./SavedMessage"

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
    <div className="settings">
      <ul>
        {[
          {
            title: "General Settings",
            component: (
              <GeneralSettings push={handleOpenComponent} back={removeLayout} />
            )
          },
          {
            title: "Saved Message",
            component: <SavedMessage />
          }
        ].map((item, key) => (
          <li key={key} onClick={() => handleOpenComponent(item.component)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Settings
