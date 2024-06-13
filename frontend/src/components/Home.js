import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          
          <Typography variant="h3">View All products</Typography>
        </Button>
        <Typography variant="h4" sx={{ color: 'grey', padding: '8px 0' }}>Story books</Typography>
          <Typography variant="h4" sx={{ color: 'grey', padding: '8px 0' }}>Fantasy</Typography>
          <Typography variant="h4" sx={{ color: 'grey', padding: '8px 0' }}>Mystery</Typography>
          <Typography variant="h4" sx={{ color: 'grey', padding: '8px 0' }}>Horror</Typography>
          <Typography variant="h4" sx={{ color: 'grey', padding: '8px 0' }}>Thriller</Typography>
      </Box>
    </div>
  );
};

export default Home;
