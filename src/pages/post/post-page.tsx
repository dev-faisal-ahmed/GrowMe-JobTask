import { Container } from "@mui/material";
import { getUserFromLocal } from "../../utils/helper";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../hooks/use-app-context";

export default function PostPage() {
  const user = getUserFromLocal();
  const { onNotify } = useAppContext();

  if (!user) {
    onNotify();
    return <Navigate to={"/"} />;
  }

  return <Container>hi this is post</Container>;
}
