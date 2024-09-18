import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddAnimal from "./AddAnimal";
import AddSighting from "./AddSighting";

export default function Tabs() {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Featured creature" value="0" />
            <Tab label="Sightings" value="1" />
            <Tab label="Add a new species" value="2" />
            <Tab label="Add a new animal" value="3" />
            <Tab label="Add a new sighting" value="4" />
          </TabList>
        </Box>
        <TabPanel value="0"></TabPanel>
        <TabPanel value="1"></TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3"><AddAnimal /></TabPanel>
        <TabPanel value="4">
          <AddSighting />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
