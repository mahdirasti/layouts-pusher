import "./style.css"

import * as React from "react"

interface ILayoutProps {
  item: React.ReactNode
  itemIndex: number
  cameraIndex: number
  width: number
  transitionTime?: number
  hasBlur?: boolean
}

const Layout: React.FunctionComponent<ILayoutProps> = ({
  item,
  itemIndex,
  cameraIndex,
  width = 0,
  transitionTime = 300,
  hasBlur = false
}) => {
  //Measure distance to current
  let distance = (itemIndex - (cameraIndex - 1)) * width

  if (distance < 0) {
    distance -= 20
  } else if (distance > width) {
    distance += 20
  }

  if (!width) return null

  return (
    <div
      className={`layout ${hasBlur ? "layout-blured" : ""} ${
        itemIndex === cameraIndex - 1 ? "current" : ""
      }`}
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
