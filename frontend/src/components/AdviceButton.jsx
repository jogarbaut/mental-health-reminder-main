import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@mui/material";
import CustomButton from "./CustomButton"; // Assuming it's in the same directory
import { getWellnessTip } from "../services/SelfCareTipsService";

const AdviceButton = ({ lastEntry }) => {
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleAdviceClick = async () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    if (!lastEntry) {
      setError("No entries available to fetch advice.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await getWellnessTip(lastEntry, time);
      setTip(response.tip);
      setOpen(true); // Open the dialog to show the tip
    } catch (err) {
      setError("Failed to fetch advice. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <CustomButton
        onClick={handleAdviceClick}
        variant="secondary" // Use "secondary" variant for styling
      >
        {loading ? "Loading..." : "Advice"}
      </CustomButton>

      {/* Error Message */}
      {error && (
        <Typography variant="body2" color="error" style={{ marginTop: "10px" }}>
          {error}
        </Typography>
      )}

      {/* Dialog for Tip */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Wellness Tip</DialogTitle>
        <DialogContent>
          <Typography>{tip}</Typography>
        </DialogContent>
        <DialogActions>
          <CustomButton onClick={handleClose} variant="primary">
            Close
          </CustomButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdviceButton;
