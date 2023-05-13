import "./style.css"

import { Stack, SxProps, Theme } from "@mui/material"

import Layout from "./Layout"
import React from "react"

export type IAddLayout = (item: React.ReactNode) => void
export type IRemoveLayout = () => void

interface ILayoutsHolder {
  width: number
  children: (
    addLayout?: IAddLayout,
    removeLayout?: IRemoveLayout
  ) => React.ReactNode
  transitionTime?: number
  className?: string
  hasBlur?: boolean
}

const LayoutsHolder: React.FunctionComponent<ILayoutsHolder> = ({
  width,
  children,
  transitionTime = 300,
  className,
  hasBlur = false
}) => {
  //Handlin index of camera
  const [transition, setTransition] = React.useState(0)
  const [cameraIndex, setCameraIndex] = React.useState(0)
  //Set camera
  React.useEffect(() => {
    if (children()) setCameraIndex(1)
  }, [children])
  //Set transition
  React.useEffect(() => {
    if (transitionTime) {
      setTimeout(() => setTransition(transitionTime), 1)
    }
  }, [transitionTime])

  //State for storing layouts
  const [layouts, setLayouts] = React.useState<React.ReactNode[]>([])

  //Handlign add layout
  const handleAddLayout = (item: React.ReactNode) => {
    setLayouts((crt) => [...crt, item])
    setTimeout(() => {
      setCameraIndex((crt) => crt + 1)
    }, 1)
  }

  //Handling remove layout
  const handleRemoveLayout = () => {
    setCameraIndex((crt) => (crt > 0 ? crt - 1 : 0))
    //Remove layout after specific time
    setTimeout(
      () => setLayouts((crt) => crt.filter((item, _) => _ !== crt.length - 1)),
      transitionTime
    )
  }

  //Render layouts
  const renderLayouts = () => {
    let finalLayouts: React.ReactNode[] = []

    if (children) finalLayouts = [children(handleAddLayout, handleRemoveLayout)]

    finalLayouts = [...finalLayouts, ...layouts]

    if (!finalLayouts.length) return null

    return (
      <div className={`layouts ${className}`}>
        {finalLayouts.map((layout, key) => (
          <Layout
            key={key}
            item={layout}
            itemIndex={key}
            cameraIndex={cameraIndex}
            width={width}
            transitionTime={transition}
            hasBlur={hasBlur}
          />
        ))}
      </div>
    )
  }

  if (!width) return null

  return (
    <div
      className="layouts-holder"
      style={{
        width,
        height: "100vh",
        transition: `${transition / 1000}s all`
      }}
    >
      {renderLayouts()}
      {/* {children(handleAddLayout, handleRemoveLayout)} */}
    </div>
  )
}
export default LayoutsHolder
