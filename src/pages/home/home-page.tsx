import { Alert, Box, Button, Container, Snackbar, TextField, Typography, useMediaQuery } from "@mui/material";
import { styleData } from "../../data/style-data";
import { grey } from "@mui/material/colors";
import { FormEvent } from "react";
import { UserType } from "../../utils/types";
import { setUserToLocal } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks/use-app-context";

type InputType = HTMLFormElement & {
  name: { value: string };
  phone: { value: string };
  email: { value: string };
};

export default function Home() {
  const { spacing } = styleData;
  const sm = useMediaQuery("(max-width:600px)");
  const path = useNavigate();
  const { notify, offNotify } = useAppContext();

  function handleSubmission(event: FormEvent) {
    event.preventDefault();
    const form = event.target as InputType;
    const formData: UserType = {
      name: form.name.value.trim(),
      phone: form.phone.value,
      email: form.email.value.trim(),
    };
    setUserToLocal(formData);
    path("/post");
  }

  return (
    <Container>
      <Box
        padding={spacing.sm}
        sx={{
          bgcolor: sm ? null : "white",
          boxShadow: sm ? 0 : 1,
          borderRadius: 2,
          padding: 2,
          p: 5,
          maxWidth: "500px",
          mt: 5,
          mx: "auto",
        }}
      >
        <Typography variant="h5" textAlign={"center"} marginBottom={1} fontWeight={700} component="h1">
          Welcome
        </Typography>
        <Typography component="p" textAlign={"center"} marginBottom={5} color={grey[600]}>
          I believe you are new here, Let's get started
        </Typography>

        {/* form */}
        <Box
          onSubmit={handleSubmission}
          component={"form"}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField label="Name" placeholder="Enter Your Name" name="name" fullWidth required />
          <TextField
            label="Phone Number"
            placeholder="Enter Your Phone Number"
            type="number"
            name="phone"
            fullWidth
            required
          />
          <TextField
            label="Email"
            placeholder="Enter Your Email"
            type="email"
            name="email"
            fullWidth
            required
          />
          <Button variant="contained" sx={{ mt: 2 }} type="submit">
            Submit
          </Button>
        </Box>
      </Box>

      {/* alert if user is not logged in */}
      <Snackbar open={notify} autoHideDuration={4000} onClose={offNotify}>
        <Alert onClose={offNotify} severity="error">
          Please Update Your Information First
        </Alert>
      </Snackbar>
    </Container>
  );
}
