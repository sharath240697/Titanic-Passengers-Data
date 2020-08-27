import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router } from 'react-router-dom';
import Box from "@material-ui/core/Box";

// tab material
import Task from "../task/Task";

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

  return(
    <Router>
    <Container className={classes.container}>
    
      
        <Grid item x={10}>
           
            <TabPanel value={1} index={1} className={classes.tabPanel}>
                <Task />
            </TabPanel>
        </Grid>
    </Container>
    </Router>
  )
};

export default Menu;
