import React, { Component } from "react";
import {Card, CardContent, Typography, makeStyles} from "@material-ui/core";

import DataTable from "./DataTable";
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

          console.log(this.state)
      }

    render() {
        console.log(this.state)
       
        return(
          
            <div>
                 {   this.state === null && <h4>Loading...</h4> }
                {
                    this.state != null &&
            <div>
                <Card>
                    <CardContent>
                        <Typography>
                          
                            <b>Fetch the following URL in the comments to access the data. </b>
                        </Typography>

                        <Typography>
                            If you have trouble with doing this, you can access some data through by importing the "data".
                        </Typography>

                        <Typography>
                            An example table with some random data has been provided.
                            Replace the example table with your solution below.
                        </Typography>
                    </CardContent>
                </Card>
                
               <DataTable passengerData= {this.state.PassengerData} 
                    filterableFields ={util.filterableFields}/>
               </div>
                }
            </div>
        );
    }
};



export default Task;

