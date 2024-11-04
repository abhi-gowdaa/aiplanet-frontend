import { useState } from "react";
import {
  Container,
  Box,
  Card,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import axios from "axios";

const Header = () => {
  const [filename, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const onFileChange = async (event) => {
    const formdata = new FormData();
    formdata.append("files", event.target.files[0]);
    setLoading(true);
    try {
      const response = await axios.post("https://aiplanet-backend-lbxk.onrender.com/", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = response.data;
      setLoading(false);
      setFileName(data);
      //  console.log(data);
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
      <Container sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <Typography variant="h6">
          <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
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
        
        {loading && <CircularProgress />}
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
            sx={{ display: "flex", alignItems: "center", color: "green" }}
          >
            {filename}
          </Typography>
        )}
        <Button
          variant="outlined"
          disabled={loading}
          component="label"
          sx={{
            color: "black",
            borderColor: "black",
            borderRadius: "10px",
            maxWidth: "300px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AddCircleOutlineOutlinedIcon />
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "550", display: { xs: "none", md: "block" } }}
            >
              Upload Pdf
            </Typography>
            <input
              hidden
              onChange={onFileChange}
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
