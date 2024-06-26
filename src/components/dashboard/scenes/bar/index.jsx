import { Box } from "@mui/material";
import Header from "../../components/Header";
import SimpleBarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="85vh">
     
        <SimpleBarChart />
      </Box>
    </Box>
  );
};

export default Bar;