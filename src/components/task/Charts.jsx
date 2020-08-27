import React, { Component } from "react";
import {
     CardHeader,
    Card, CardContent, Typography
} from "@material-ui/core";
import {Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from 'recharts';
import { countBy } from 'underscore'


class Charts extends Component{
    constructDepartureData()
    {
       const data1 = this.props.passengerData; 
       const portNames = Object.keys(countBy(data1, function(data1) { 
           if(data1!==null) {
            return data1['Embarked']}
        return; }));
       // console.log(ticketClass)
        let plotArray = portNames.map(place => {
            const a = countBy(data1, function(data1) { 
                if(data1!==null) {
                 return data1['Embarked']===place && data1['Sex']}
             return; })
          //   console.log(a)
            if(place!== undefined)
            {
                return {name:place, Male:a.Male, Female: a.Female, Total: a.Male+a.Female}
            }    
            return false;              
        })
        plotArray = plotArray.filter(data => data.name!=="undefined")
        
        return plotArray;
    }

    constructTicketClass()
    {
         const data1 = this.props.passengerData; 
         const ticketClass = Object.keys(countBy(data1, function(data1) { 
             if(data1!==null) {
                 
              return data1['Ticket class']}
          return; }));
       //   console.log(ticketClass)
          let plotArray = ticketClass.map(ca => {
              const a = countBy(data1, function(data1) { 
                  if(data1!==null) {
                      
                   return data1['Ticket class']===ca && data1['Sex']}
               return; })
            //   console.log(a)
              if(ca!== undefined)
              {
                  return {name:ca, Male:a.Male, Female: a.Female}
              }          
              return false;             
          })
         let arr1 = plotArray.filter(data => data.name!=="undefined")
        //  console.log(arr)
         arr1 = countBy(data1, function(data1) { 
            if(data1!==null) {
                
             return data1['Ticket class']  }
         return; });
         delete arr1['undefined'];
        return plotArray.map(obj => {return {Total:arr1[obj.name],...obj}}).filter(data => data.name!=="undefined")
    }
    
    
    render()  {
        this.constructTicketClass()
        return  (
                <Card style={{display:"flex"}}>
                    
                    <CardContent>
                    <CardHeader title="Port departure details"/>                   
                    <PlotBarChart data={this.constructDepartureData()} bars={{Total:"#7623c9",Male:"#8884d8",Female:"#82ca9d"}}></PlotBarChart>
                    <Typography variant="body2" color="textSecondary" component="p">
                    The details of passengers departed from ports has been plotted with X axis indicating port names and 
                    Bars indicating total passengers boarded ship from 
                    the respective port, along with gender details
                    </Typography>
                    </CardContent>
                
                 <CardContent>
                 <CardHeader title="Ticket Class details"/>    
                 <PlotBarChart data={this.constructTicketClass()} bars={{Total:'#88ca4ddd',Male:"#8884d8",Female:"#82ca9d"}}></PlotBarChart>
                 <Typography variant="body2" color="textSecondary" component="p">
                    The details of number of passengers in different ticket class has been plotted with X axis indicating Ticket class and 
                    Bars indicating total passengers, along with gender details
                    </Typography>
                 </CardContent>
             </Card>
        )
            }    
 }

function PlotBarChart(props){
    //console.log(props.data)
	return (
        <BarChart
		width={500}
		height={300}
		data={props.data}
		margin={{
			top: 5, right: 30, left: 20, bottom: 5,
		}}
	>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="name" />
		<YAxis />
		<Tooltip />
		<Legend />	
        {Object.keys(props.bars).map((barkey,index) => <Bar key={`bar_${index}`} dataKey={barkey} fill={props.bars[barkey]} />)}
	</BarChart>
    )
}

export default Charts;