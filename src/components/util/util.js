export const dataURL = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=titanic-passengers&q=&rows=1000"

export function formatData(passengerRecords) {
    console.log('in util.js formatData method')
    console.log(passengerRecords)
    const data_arry = passengerRecords.records.map(record => record.fields)
    return data_arry;
       
    }