import React, { Component } from "react";
import {
    Table,
    TableCell,
    TableRow,
    TableBody,
    TableHead,

    Card, CardContent, Typography
} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


class DataTable extends Component{
   
    constructor(props) {
        super(props);
    }
  
    render()  {
        const {passengerData } = this.props;

        return  (
            <Card>
                <CardContent>
                    <Typography>Example Table (how many cats and dogs we saw each day)</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                            {Object.keys(passengerData[0]).map((key, i) => <TableCell key={`heading_${i}`}>{key}</TableCell>)}
                            </TableRow>
                        </TableHead>
        
                        <TableBody>
                        {
                           passengerData.length !==0 && passengerData.map((record, ind) => <TableRow key={`exampleRow_${ind}`}>
                                {record!== null && Object.values(record).map((data, i) => <TableCell key={`exampleCell_${i}`}>{data===undefined? '-':data}</TableCell>)}
                                </TableRow>)
                        }
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        );
    }    
 }



export default DataTable;



