import { Box, CircularProgress } from "@mui/material";

export function Loading() {
  return (
    <Box sx={{ margin: "20px auto", width: "fit-content" }}>
      <CircularProgress />;
    </Box>
  );
}
