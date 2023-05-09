import * as React from "react"

import { Stack } from "@mui/material"

interface ITelegramGalleriesProps {}

const TelegramGalleries: React.FunctionComponent<ITelegramGalleriesProps> = (
  props
) => {
  return (
    <Stack
      sx={{
        [`& img`]: {
          height: 200,
          width: "100%",
          objectFit: "cover"
        }
      }}
    >
      <img
        src={
          "https://back.kimura.ir/wp-content/uploads/2023/05/ab81cde1-dbdc-4ca7-bd0d-1546f18ab73a.jpeg"
        }
        alt="Mahdi Rasti"
      />
    </Stack>
  )
}

export default TelegramGalleries
