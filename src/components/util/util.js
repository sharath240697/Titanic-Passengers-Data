/* Application Configuration variables declartion */
/*Configuration Starts */
export const dataURL = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=titanic-passengers&q=&rows=1000"
export const fieldLabels = {survival: "Survival", pclass:'Ticket class', sex:'Sex',
                                age:'Age', ticket:'Ticket number', fare:'Fare',
                                embarked:'Embarked', class: "Ticket class", name: "Name"}

//Details necessary for reformating data
export const embarkedPlaces = {C: 'Cherbourg', Q: 'Queenstown', S: 'Southampton',none:'None'}  //contains decoding details of embarked places
export const ticketClass = {1:'First',2:'Second', 3:'Third',none:'None'}  //contains decoding details of Ticket class
export const survivalStatus = {0: 'No', 1:'Yes',none:'None'}
export const sex = {male:'Male', female:'Female',none:'None'}
export const ticketPriceClass = {cheap:'Cheap',regular:'Regular',expensive:'Expensive',none:'None'}

//Filterable Fields and filter by options
export const filterableFields = { [fieldLabels.embarked]: [embarkedPlaces.C,embarkedPlaces.Q,embarkedPlaces.S,embarkedPlaces.none],
                                  [fieldLabels.survival]: [survivalStatus[0], survivalStatus[1],survivalStatus.none],
                                  [fieldLabels.sex]: [sex.male,sex.female,sex.none],
                                  [fieldLabels.pclass]: [ticketClass[1],ticketClass[2],ticketClass[3],ticketClass.none],
                                  [fieldLabels.fare]:  [ticketPriceClass.cheap,ticketPriceClass.regular,ticketPriceClass.expensive,ticketPriceClass.none] }

//Navbar parameters
export const navBarTitle = 'Titanic Passenges Data'
/*Configuration Ends */


export function formatData(passengerRecords) {
    //console.log('in util.js formatData method')
    //console.log(passengerRecords)
    let passengerData = []
    passengerData = passengerRecords.records.map(record => record.fields)
    passengerData = passengerData.map(record => {
        
        if(record.fare !== 0)
        {
          let  newRecord = { [fieldLabels.name] : record.name, 
                            [fieldLabels.age]: record.age, [fieldLabels.sex]: record.sex,
                            [fieldLabels.fare]: record.fare, 
                            [fieldLabels.pclass]:record.pclass, [fieldLabels.embarked]:record.embarked}
       newRecord = reFormatData(record, newRecord)
        return newRecord
        }
        return null;
    })
    return passengerData;   
    }
    


function reFormatData(record, newRecord)
{
    //Change Embarked place name
    if(Object.keys(embarkedPlaces).includes(record.embarked))
    newRecord.Embarked = embarkedPlaces[record.embarked]

    //Decode Survival Status
    if(record.survival === 1)
    { newRecord[fieldLabels.survival] = survivalStatus[1]}
    else { newRecord[fieldLabels.survival] = survivalStatus[0]}

    //Decode Ticket class
    if(Object.keys(ticketClass).includes(record.pclass.toString()))
    {newRecord[fieldLabels.pclass] = ticketClass[record.pclass]}

    //Case format Sex
    if(record.sex === 'male') {newRecord[fieldLabels.sex]=sex.male}
    else {newRecord[fieldLabels.sex]=sex.female}
    newRecord[fieldLabels.fare] = record.fare.toFixed(2);
    return newRecord
}

export function filterFunction(datarecords,filterByOptions)
{
    console.log(filterByOptions)
    let filteredRecords = datarecords;  
    (Object.keys(filterByOptions).map(option => {
        if(filterByOptions[option]!==option && filterByOptions[option]!=='None')
        {
            if(option!==fieldLabels.fare) {
                
                filteredRecords = filteredRecords.filter(record => {
               
                    if(record!==null && record!==undefined)
                      {
                       return record[option]===filterByOptions[option]
                      } 
                   return false;
                })}
                if(option===fieldLabels.fare)
                {
                    
                    filteredRecords = filteredRecords.filter(record => {
                        if(record!==null && record!==undefined)
                          {
                            if(record[option]<20 && filterByOptions[option] === ticketPriceClass.cheap)
                                return true;
                             if(record[option]>20 && record[option]<=100 && filterByOptions[option] === ticketPriceClass.regular)
                                return true;
                            if(record[option]>100 && filterByOptions[option] === ticketPriceClass.expensive)
                                return true;
                          } 
                        return false;
                    })
                }
        }     
        
    }))
    console.log(filteredRecords)
    return filteredRecords;  
}