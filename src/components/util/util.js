export const dataURL = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=titanic-passengers&q=&rows=1000"


export function formatData(passengerRecords) {
    //console.log('in util.js formatData method')
    //console.log(passengerRecords)
    let passengerData = []
    passengerData = passengerRecords.records.map(record => record.fields)
    passengerData = passengerData.map(record => {
        
        if(record.fare !== 0)
        {
          let  newRecord = {Name: record.name, 
                            Age: record.age, Sex: record.sex,
                            'Ticket number':record.ticket, Fare: record.fare, 
                            'Ticket class':record.pclass, 'Embarked':record.embarked}
       newRecord = reFormatData(record, newRecord)
        return newRecord
        }
        return null;
    })
 

//console.log(passengerData)
    return passengerData;   
    }
    

//Details necessary for reformating data
export const embarkedPlaces = {C: 'Cherbourg', Q: 'Queenstown', S: 'Southampton'}  //contains decoding details of embarked places
export const ticketClass = {'1':'First','2':'Second', '3':'Third'}  //contains decoding details of Ticket class

function reFormatData(record, newRecord)
{
    //Change Embarked place name
    if(Object.keys(embarkedPlaces).includes(record.embarked))
    newRecord.Embarked = embarkedPlaces[record.embarked]

    //Decode Survival Status
    if(record.survival === 1)
    { newRecord.Survived = 'Yes'}
    else { newRecord.Survived = 'No'}

    //Decode Ticket class
    if(Object.keys(ticketClass).includes(record.pclass.toString()))
    {newRecord['Ticket class'] = ticketClass[record.pclass]}
    return newRecord
    
}