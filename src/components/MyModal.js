import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import IMG from "../assets/favicon.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  maxWidth: "100%",
  bgcolor: "#1976d2",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#d9d9d9",
  padding: "1rem",
  borderRadius: "16px",
};

const styleButton = {
  position: "fixed",
  height: "4rem",
  width: "4rem",
  fontSize: "3rem",
  bottom: "1rem",
  right: "1rem",
  backgroundColor: "red",
};

export default function MyModal() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button className="modalButton" onClick={handleOpen} sx={styleButton}>
        <img src={IMG} alt="ICON" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center", backgroundColor: "#1c538a" }}
          >
            The css library section of the course!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Up to the second project we learn the basics about three different
            css libraries: Material UI, Bootstrap and Bulma IO.
            <br />
            In this project you will find an <b>applied</b> introduction about:
          </Typography>
          <br />
          <ul>
            <li>
              - How to handle different css libraries: installing with npm or
              yarn, using html tags in the index.html file, etc.
            </li>
            <li>
              - The handling of the reactive components like the Persistent
              drawer of MUI and the Cards.
            </li>
            <li>
              - How to approach and read documentation for his usage in a
              project.
            </li>
            <li>
              - Understanding of the necessities of a project to adjust the
              search of a css library.
            </li>
          </ul>
          <br />
          <Typography>
            This project is using up to three different libraries at ones, witch
            is not recommended. This lesson was in order to show the use and
            understanding of a library.
          </Typography>
          <br />
          <Typography>
            It is highly recomended that you open the repository for this
            project at: PONER LINK
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
