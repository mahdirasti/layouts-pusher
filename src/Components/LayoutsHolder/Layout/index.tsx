import "./style.css"

import * as React from "react"

interface ILayoutProps {
  item: React.ReactNode
  itemIndex: number
  cameraIndex: number
  width: number
  transitionTime?: number
}

const Layout: React.FunctionComponent<ILayoutProps> = ({
  item,
  itemIndex,
  cameraIndex,
  width = 0,
  transitionTime = 300
}) => {
  //Measure distance to current
  const distance = (itemIndex - (cameraIndex - 1)) * width

  if (!width) return null

  return (
    <div
      className="layout"
      style={{
        transform: `translateX(${distance}px)`,
        transition: `${transitionTime / 1000}s all`
      }}
    >
      {item}
    </div>
  )
}

export default Layout
