
import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function ErrorAlert({ severity = "error", message }) {
  if (!message) return null;

  return (
    <Stack sx={{ width: "100%", marginTop: 2 }} spacing={2}>
      <Alert severity={severity}>{message}</Alert>
    </Stack>
  );
}
