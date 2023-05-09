import "./style.css"

import Layout from "./Layout"
import React from "react"
import { useDomHeight } from "../../Hook"

export type IAddLayout = (item: React.ReactNode) => void
export type IRemoveLayout = () => void

interface ILayoutsHolder {
  width: number
  children: (
    addLayout?: IAddLayout,
    removeLayout?: IRemoveLayout
  ) => React.ReactNode
  transitionTime?: number
}

const LayoutsHolder: React.FunctionComponent<ILayoutsHolder> = ({
  width,
  children,
  transitionTime = 300
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
  const renderLayouts = (height?: number) => {
    let finalLayouts: React.ReactNode[] = []

    if (children) finalLayouts = [children(handleAddLayout, handleRemoveLayout)]

    finalLayouts = [...finalLayouts, ...layouts]

    if (!finalLayouts.length) return null

    return (
      <div className="layouts" style={{ height }}>
        {finalLayouts.map((layout, key) => (
          <Layout
            key={key}
            item={layout}
            itemIndex={key}
            cameraIndex={cameraIndex}
            width={width}
            transitionTime={transition}
          />
        ))}
      </div>
    )
  }

  //Determine current layout
  const currentLayout = React.useMemo(() => {
    if (!layouts.length) return null

    if (!layouts?.[cameraIndex - 1]) return null

    return layouts[cameraIndex - 1]
  }, [layouts, cameraIndex])

  //Current layout height
  const currentLayoutHeight = useDomHeight(currentLayout)

  if (!width) return null

  return (
    <div
      className="layouts-holder"
      style={{
        width,
        height: currentLayoutHeight,
        transition: `${transition / 1000}s all`,
        boxShadow: "0px 2px 8px rgba(0,0,0,0.12)"
      }}
    >
      {renderLayouts(currentLayoutHeight)}
      {/* {children(handleAddLayout, handleRemoveLayout)} */}
    </div>
  )
}
export default LayoutsHolder
