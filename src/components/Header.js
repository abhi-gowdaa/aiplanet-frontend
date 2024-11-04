import { useState } from "react";
import {Container,Box,Card,Typography,Button,CircularProgress} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import axios from "axios";

const Header = () => {
  // State to store file name and loading status
  const [filename, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle file change and upload
  const onFileChange = async (event) => {
    const formdata = new FormData(); 
    formdata.append("files", event.target.files[0]); // Appending selected file
    setLoading(true); // Setting loading to true while uploading

    try {
      // Sending POST request to upload file
      const response = await axios.post("http://127.0.0.1:8000/", formdata, {
        headers: {
          "Content-Type": "multipart/form-data", // Header for file upload
        },
      });
      const data = response.data; // Getting response data
      setLoading(false); // Stopping loading spinner
      setFileName(data); // Setting filename after upload
      // console.log(data);  
    } catch (error) {
      console.log(error);  
    }
  };

  return (
    <Card
      position="static"
      sx={{
        width: "100%", 
        margin: 0,
        height: "90px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <Typography variant="h6">
          <img src="/logo.png" alt="Logo" style={{ height: 40 }} /> {/* Logo image */}
        </Typography>
      </Container>

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end", 
          gap: 2,
          flexGrow: 1,
        }}
      >
        {loading && <CircularProgress />} {/* Show loading spinner if loading */}
        
        {filename && (
          <InsertDriveFileOutlinedIcon
            sx={{
              p: 1,
              border: "1.5px solid green",
              borderRadius: "5px",  
              color: "green",
            }}
          />
        )}
        
        {filename && (
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "green",
            }}
          >
            {filename} {/* uploaded file name */}
          </Typography>
        )}
        
        <Button
          variant="outlined"
          disabled={loading} // Disable button when loading
          component="label"
          sx={{
            color: "black",
            borderColor: "black",
            borderRadius: "10px",  
            maxWidth: "300px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AddCircleOutlineOutlinedIcon /> {/* Upload icon */}
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "550",
                display: { xs: "none", md: "block" },
              }}
            >
              Upload Pdf 
            </Typography>
            <input
              hidden
              onChange={onFileChange} // Call file change function
              accept="application/pdf"  
              type="file"
            />
          </Box>
        </Button>
      </Container>
    </Card>
  );
};

export default Header;
