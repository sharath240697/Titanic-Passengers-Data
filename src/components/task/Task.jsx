import React, { Component } from "react";
import {Card, CardContent} from "@material-ui/core";
import { withRouter,  Switch, Route } from 'react-router-dom';
import DataTable from "./DataTable";
import NavBar from "./NavBar"
import Charts from './Charts'
import * as util from "../util/util"
// import data from "../../data";

// Use the following url to access the data
// https://public.opendatasoft.com/api/records/1.0/search/?dataset=titanic-passengers&q=&rows=1000
// HINT: You should use "fetch".
// If you have trouble with this, you can access a subset of the data through the uncommenting import "data" file above
// console.log(data);

// To find out about the fields inside the data, you can have a look at the data dictionary in the data description
// on Kaggle here
//  https://www.kaggle.com/c/titanic/data

class Task extends Component {

    componentDidMount() {
       fetch(util.dataURL) 
          .then(response => response.json())
          .then(json => {
            this.setState({ PassengerData: util.formatData(json) });
          }); 

        //  console.log(this.state)
      }

      handleNavBarClick(path)
      {
        this.props.history.push(`/${path}`);
      }

    render() {
       // console.log(this.state)
       
        return(
          
            <div>
                 {   this.state === null && <h4>Loading...</h4> }
                {
                    this.state != null &&
            <div>
                <Card>
                    <CardContent>
                       <NavBar title={util.navBarTitle} onClick={path => this.handleNavBarClick(path)}></NavBar>
                    </CardContent>
                </Card>
               
                <Switch>   
                    <Route  path= {util.pathForData}>
                            <DataTable passengerData= {this.state.PassengerData} 
                                         filterableFields ={util.filterableFields}
                                        filteringFunction = {util.filterFunction}/>
                    </Route>  
                    <Route path={util.pathForChart}>
                        <Charts passengerData= {this.state.PassengerData} ></Charts>
                    </Route>  
                    <Route  path="/">
                            <DataTable passengerData= {this.state.PassengerData} 
                                         filterableFields ={util.filterableFields}
                                        filteringFunction = {util.filterFunction}/>
                    </Route>           
                </Switch>
                  
               </div>
                }
            </div>
        );
    }
};



export default (withRouter(Task));

