import * as React from "react"

import { IAddLayout, IRemoveLayout } from "../../LayoutsHolder"

interface IGeneralSettingsProps {
  push?: IAddLayout
  back?: IRemoveLayout
}

const GeneralSettings: React.FunctionComponent<IGeneralSettingsProps> = ({
  back,
  push
}) => {
  return (
    <div className="settings-component general-settings">
      {back && <button onClick={back}>Back</button>}
      <ul>
        {[
          { title: "Audio", component: <>Hello this is audio part!</> },
          { title: "Cock", component: <>Hello this is my cock!</> }
        ].map((item, index) => (
          <li key={index} onClick={() => push && push(item.component)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GeneralSettings
