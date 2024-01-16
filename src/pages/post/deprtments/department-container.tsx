import { Box, Checkbox, Typography } from "@mui/material";
import { DeptType } from "../../../utils/types";
import { useEffect, useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";

export function DepartmentContainer({ department, sub_departments }: DeptType) {
  const [expand, setExpand] = useState(false);
  const [subDeptStatus, setSubDeptStatus] = useState(
    sub_departments.map((data) => ({ subDeptName: data, checked: false }))
  );

  const [checked, setChecked] = useState(false);

  function handleChange(subDeptName: string) {
    const newSubDeptStatus = subDeptStatus.map((el) => {
      if (el.subDeptName === subDeptName) return { ...el, checked: !el.checked };
      return el;
    });
    setSubDeptStatus(newSubDeptStatus);
  }

  function handleToggle() {
    if (checked) {
      // removed all checked from subDept
      const newSubDept = subDeptStatus.map((el) => ({ ...el, checked: false }));
      setSubDeptStatus(newSubDept);
      setChecked(false);
      return;
    }
    const newSubDept = subDeptStatus.map((el) => ({ ...el, checked: true }));
    setSubDeptStatus(newSubDept);
    setChecked(true);
  }

  useEffect(() => {
    const subDept = subDeptStatus.filter((data) => data.checked);
    if (subDept.length === sub_departments.length) setChecked(true);
    else setChecked(false);
  }, [subDeptStatus, sub_departments.length]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Box onClick={() => setExpand((prev) => !prev)}>
          <AddIcon sx={{ cursor: "pointer" }} />
        </Box>
        <Checkbox onChange={handleToggle} checked={checked} />
        <Typography variant="h3" sx={{ fontSize: 20, textTransform: "capitalize", mx: "-4px" }}>
          {department}
        </Typography>
      </Box>
      {expand && (
        <Box>
          {subDeptStatus.map((el) => (
            <Box key={el.subDeptName} sx={{ display: "flex", alignItems: "center", pl: 6 }}>
              <Checkbox onChange={() => handleChange(el.subDeptName)} checked={el.checked} />
              <Typography>{el.subDeptName}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
