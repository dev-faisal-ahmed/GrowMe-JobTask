import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetPosts } from "../../hooks/use-get-posts";
import { useEffect } from "react";
import { Loading } from "../../components/loading";
import { Typography } from "@mui/material";

export function PostTable() {
  const { posts, loading, fetchPosts } = useGetPosts();

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <Loading />;

  const columns: GridColDef[] = [
    {
      field: "userId",
      headerName: "User ID",
      minWidth: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "id",
      headerName: "ID",
      minWidth: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "title",
      headerName: "Title",
      width: 350,
    },
    {
      field: "body",
      headerName: "Body",
      width: 350,
      resizable: true,
    },
  ];
  return (
    <>
      <Typography component="h1" sx={{ textAlign: "center", fontWeight: "700", fontSize: 26, mb: 5 }}>
        All Posts
      </Typography>
      <DataGrid
        rows={posts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 20]}
      />
    </>
  );
}
