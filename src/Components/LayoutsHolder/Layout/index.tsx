import * as React from "react"

import styled from "styled-components"

interface ILayoutProps {
  item: React.ReactNode
  itemIndex: number
  cameraIndex: number
  width: number
  transitionTime?: number
  hasBlur?: boolean
}

const LayoutDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition-timing-function: cubic-bezier(
    0.82,
    0.085,
    0.395,
    0.895
  ) !important;
  &.layout-blured {
    filter: blur(10px);
    opacity: 0;
  }
  &.current {
    filter: none !important;
    opacity: 1;
  }
`

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
    <LayoutDiv
      className={`layout ${hasBlur ? "layout-blured" : ""} ${
        itemIndex === cameraIndex - 1 ? "current" : ""
      }`}
      style={{
        transform: `translateX(${distance}px)`,
        transition: `${transitionTime / 1000}s all`
      }}
    >
      {item}
    </LayoutDiv>
  )
}

export default Layout
