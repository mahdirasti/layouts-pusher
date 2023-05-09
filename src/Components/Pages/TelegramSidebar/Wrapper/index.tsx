import "./style.css"

import * as React from "react"

import { IRemoveLayout } from "../../../LayoutsHolder"
import { Stack } from "@mui/material"
import WrapperContent from "./Content"
import WrapperHeading from "./Heading"

interface IWrapperProps {
  title: string
  children: React.ReactNode
  back?: IRemoveLayout
}

const Wrapper: React.FunctionComponent<IWrapperProps> = ({
  title,
  children,
  back
}) => {
  return (
    <Stack
      className="wrapper-holder"
      sx={{ overflow: "auto", height: "100vh" }}
    >
      <WrapperHeading title={title} back={back} />
      <WrapperContent children={children} />
    </Stack>
  )
}

export default Wrapper
