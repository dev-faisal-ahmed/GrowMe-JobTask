import { Box, Typography } from "@mui/material";
import { DepartmentContainer } from "./department-container";
import { deptInfo } from "../../../data/dept-info";

export function Departments() {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h1" sx={{ fontSize: 26, fontWeight: 700, textAlign: "center" }}>
        All Departments
      </Typography>
      <Box>
        {deptInfo.map((dept) => (
          <DepartmentContainer key={dept.department} {...dept} />
        ))}
      </Box>
    </Box>
  );
}
