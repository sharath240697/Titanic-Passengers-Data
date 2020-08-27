import React, { Component } from "react";
import {
    Table,
    TableCell,
    TableRow,
    TableBody,
    TableHead,
    makeStyles,
    Card, CardContent
} from "@material-ui/core";
import SimpleSelect from './SimpleSelect'


class DataTable extends Component{
  
    componentDidMount() {
       // Object.keys(this.props.filterableFields).map(option => this.setState({filterOptions: {...this.state.filterOptions,[option]: [option]}}))
       const filterByOptions = {};
       Object.keys(this.props.filterableFields).map(option => filterByOptions[option]=option )
       this.setState({filterByOptions: filterByOptions})
   // console.log(this.state)
       }

handleFilterOptionChange(filterField,filterOption)
{
  //  console.log('hello')
   this.setState({filterByOptions: {...this.state.filterByOptions,[filterField]:filterOption}})
}

    render()  {
        const {passengerData, filterableFields} = this.props;
     let filteredRecords = passengerData;
   //  console.log(this.state)
   //  console.log(passengerData)
   //  console.log(filteredRecords)
     if(this.state!==null && filteredRecords!==null)
         filteredRecords = this.props.filteringFunction(filteredRecords,this.state.filterByOptions)
        return this.state!== null? <SimpleTable filteredRecords = {filteredRecords}
        passengerData = {passengerData} filterableFields={filterableFields}
            handleFilterOptionChange = {(filterField,filterOption) => this.handleFilterOptionChange(filterField,filterOption)}
        ></SimpleTable>: <h4>Loading..</h4>
        
            }    
 }

 const useStyles = makeStyles({
    table: {
        width: '100%',
    },
  });

function SimpleTable(props) {
    const classes = useStyles();
    return  (
         <Card>
            <CardContent>
                <Table  className={classes.table} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                        {props.passengerData[0]!==undefined && Object.keys(props.passengerData[0]).map((key, i) => 
                      
                                <TableCell key={`heading_${i}`}>
                                    { 
                                    Object.keys(props.filterableFields).includes(key)? (
                                   
                                    <SimpleSelect filterField={key} filterOption = {key} 
                                        filterByOptions={props.filterableFields[key]} 
                                        handleFilterOptionChange = {props.handleFilterOptionChange}></SimpleSelect>):key}
                                </TableCell>)}
                             
                        </TableRow>
                    </TableHead>
    
                    <TableBody>
                    {
                       props.filteredRecords.length !==0 && props.filteredRecords.map((record, ind) => <TableRow key={`Row_${ind}`}>
                            {record!== null && Object.values(record).map((data, i) => <TableCell key={`Cell_${i}`}>{data===undefined? '-':data}</TableCell>)}
                            </TableRow>)
                    }
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );


  }

export default DataTable;



/*(Object.keys(this.state.filterByOptions).map(option => {
        if(this.state.filterByOptions[option]!==option && this.state.filterByOptions[option]!=='None')
             filteredRecords = filteredRecords.filter(record => {
                 if(record!==null && record!==undefined)
                   {
                      // console.log(record[option]===this.state.filterByOptions[option])
                    return record[option]===this.state.filterByOptions[option]
                   } 
                return false;
             })
    }))*/