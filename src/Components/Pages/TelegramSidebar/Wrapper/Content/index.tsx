import * as React from "react"

import { Stack } from "@mui/material"

interface IWrapperContentProps {
  children: React.ReactNode
}

const WrapperContent: React.FunctionComponent<IWrapperContentProps> = ({
  children
}) => {
  return <Stack className="wrapper-content">{children}</Stack>
}

export default WrapperContent
