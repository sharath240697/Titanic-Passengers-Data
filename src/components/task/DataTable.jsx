import React, { Component } from "react";
import {
    Table,
    TableCell,
    TableRow,
    TableBody,
    TableHead,

    Card, CardContent, Typography
} from "@material-ui/core";
import SimpleSelect from './SimpleSelect'


class DataTable extends Component{
   
    constructor(props) {
        super(props);
    }
  
    componentDidMount() {
       // Object.keys(this.props.filterableFields).map(option => this.setState({filterOptions: {...this.state.filterOptions,[option]: [option]}}))
       const filterByOptions = {};
       Object.keys(this.props.filterableFields).map(option => filterByOptions[option]=option )
       this.setState({filterByOptions: filterByOptions})
    console.log(this.state)
       }

handleFilterOptionChange(filterField,filterOption)
{
    console.log('hello')
    this.setState({filterByOptions: {...this.state.filterByOptions,[filterField]:filterOption}})
}

    render()  {
        const {passengerData, filterableFields} = this.props;
     
        console.log(this.state)
        return  (
            this.state!== null? <Card>
                <CardContent>
                    <Typography>Example Table (how many cats and dogs we saw each day)</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                            {Object.keys(passengerData[0]).map((key, i) => 
                          
                                    <TableCell key={`heading_${i}`}>
                                        { 
                                        Object.keys(filterableFields).includes(key)? (
                                       
                                        <SimpleSelect filterField={key} filterOption = {key} 
                                            filterByOptions={filterableFields[key]} 
                                            handleFilterOptionChange = {(filterField,filterOption) => this.handleFilterOptionChange(filterField,filterOption)}></SimpleSelect>):key}
                                    </TableCell>)}
                                 
                            </TableRow>
                        </TableHead>
        
                        <TableBody>
                        {
                           passengerData.length !==0 && passengerData.map((record, ind) => <TableRow key={`Row_${ind}`}>
                                {record!== null && Object.values(record).map((data, i) => <TableCell key={`Cell_${i}`}>{data===undefined? '-':data}</TableCell>)}
                                </TableRow>)
                        }
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>: <h4>Loading..</h4>
        );
    }    
 }



export default DataTable;



