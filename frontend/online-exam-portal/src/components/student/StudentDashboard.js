import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AvailableTests from './AvailableTests';
import TestsGiven from './TestsGiven';

function StudentDashboard(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

StudentDashboard.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
      "font-weight":"800"
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={tabStyle} label="available tests" {...a11yProps(0)} />
          <Tab style={tabStyle} label="total tests given" {...a11yProps(1)} />
          {/* <Tab style={tabStyle} label="upload test" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <StudentDashboard value={value} index={0}>
        <AvailableTests/>
      </StudentDashboard>
      <StudentDashboard value={value} index={1}>
        <TestsGiven/>
      </StudentDashboard>
      {/* <StudentDashboard value={value} index={2}>
        <TestSection/>
      </StudentDashboard> */}
    </Box>
  );
}
