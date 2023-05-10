import * as React from "react"

import { Button, Stack, Typography } from "@mui/material"

import { ROUTES } from "../../../Const"
import { useNavigate } from "react-router-dom"

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const navigate = useNavigate()

  return (
    <Stack direction="column" spacing={2} sx={{ p: 4 }}>
      <Typography>You can add more samples by collobrating!</Typography>
      <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        onClick={() => navigate(ROUTES.TelegramSidebar)}
      >
        Telegram Sidebar
      </Button>
        </Stack>
    </Stack>
  )
}

export default HomePage
