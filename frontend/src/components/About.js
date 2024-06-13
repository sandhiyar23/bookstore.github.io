import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center"
        minHeight="100vh"
        padding={5}
        sx={{ backgroundColor: 'grey' }} // Light cyan background color
      >
        <Typography 
          sx={{ 
            fontFamily: "Aptos Display", 
            marginBottom: 2, 
            fontSize:30, 
            color: 'black' // Teal color for the title
          }} 
          variant="h4"
        >
          About Our Book Store
        </Typography>
        <Typography 
          sx={{ 
            fontFamily: "Arial", 
            marginBottom: 4, 
            textAlign: 'center',
            fontSize:25, 
            maxWidth: 800,
            color: 'brown' // Darker teal color for the body text
          }} 
          variant="body1"
        >
          Our online book store is an innovative platform that allows customers to browse, purchase, and enjoy a wide variety of books from the comfort of their homes. With an extensive collection of genres and titles, we aim to cater to the diverse tastes of book lovers everywhere. Our mission is to make reading accessible and enjoyable for everyone by providing a seamless online shopping experience and prompt delivery service to your doorstep.
        </Typography>
        <Typography 
          sx={{ 
            fontFamily: "Aptos Display", 
            marginBottom: 2, 
            color: 'black' // Teal color for the contact title
          }} 
          variant="h5"
        >
          Contact Us
        </Typography>
        <Typography 
          sx={{ 
            fontFamily: "Arial", 
            marginBottom: 1,
            color: 'brown' // Darker teal color for the contact information
          }} 
          variant="body1"
        >
          Address: 123 Book St, Literature City, Bookland, BK 12345
        </Typography>
        <Typography 
          sx={{ 
            fontFamily: "Arial", 
            marginBottom: 1,
            color: 'brown' // Darker teal color for the contact information
          }} 
          variant="body1"
        >
          Phone: (123) 456-7890
        </Typography>
        <Typography 
          sx={{ 
            fontFamily: "Arial", 
            marginBottom: 1,
            color: 'brown' // Darker teal color for the contact information
          }} 
          variant="body1"
        >
          Email: contact@onlinebookstore.com
        </Typography>
      </Box>
    </div>
  );
};

export default About;
