import React from "react";
import { Typography, Divider, Box } from "@mui/material";

const PageHeader = ({ title, subtitle }) => {
  return (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography variant="h3" fontWeight="bold">
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        sx={{ mt: 1, maxWidth: "600px", mx: "auto" }}
      >
        {subtitle}
      </Typography>
      <Divider sx={{ width: "60%", my: 2, mx: "auto" }} />
    </Box>
  );
};

export default PageHeader;
