import * as React from "react"

import { IconButton, Stack, Typography } from "@mui/material"

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { IRemoveLayout } from "../../../../LayoutsHolder"

interface IWrapperHeadingProps {
  title: string
  back?: IRemoveLayout
}

const WrapperHeading: React.FunctionComponent<IWrapperHeadingProps> = ({
  title,
  back
}) => {
  return (
    <Stack
      className="wrapper-heading"
      direction="row"
      alignItems="center"
      sx={{ p: "8px 16px", bgcolor: (t) => t.palette.common.white }}
      spacing={2}
    >
      {back && (
        <IconButton onClick={back}>
          <ArrowBackIcon />
        </IconButton>
      )}
      <Typography sx={{ fontWeight: "500" }} variant="h6">
        {title}
      </Typography>
    </Stack>
  )
}

export default WrapperHeading
