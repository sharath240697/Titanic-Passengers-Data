import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

// tab material
import Task from "../task/Task";

// icons
import AssignmentIcon from "@material-ui/icons/Assignment";

// use styles from material-ui
const useStyles = makeStyles(theme => ({
    grid: {
        height: "100%",
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabPanel: {
        height: "100%",
    },
    container: {
        padding: 0,
    }
}));


function TabPanel(props) {
    const { children, value, index,  className, ...other } = props;

    return (
        <Box className={className}
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}>
            {children}
        </Box>
    );
}

// navigation menu tabs
const Menu = () => {
    const classes = useStyles();

    const [ value, setValue] = useState(1);
    const handleChange = (event, newValue) => setValue(newValue);

  return(
      <Container className={classes.container}>
      <Grid container className={classes.grid}>
         
          <Grid item x={10}>
              <TabPanel value={value} index={1} className={classes.tabPanel}>
                  <Task />
              </TabPanel>
          </Grid>
      </Grid>
      </Container>
  )
};

export default Menu;
