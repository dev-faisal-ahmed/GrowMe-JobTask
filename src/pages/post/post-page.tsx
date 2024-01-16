import { Container } from "@mui/material";
import { getUserFromLocal } from "../../utils/helper";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../hooks/use-app-context";
import { PostTable } from "./post-table";
import { Departments } from "./deprtments/departments";

export default function PostPage() {
  const user = getUserFromLocal();
  const { onNotify } = useAppContext();

  if (!user) {
    onNotify();
    return <Navigate to={"/"} />;
  }

  return (
    <Container sx={{ mt: 3 }}>
      <PostTable />
      <Departments />
    </Container>
  );
}
