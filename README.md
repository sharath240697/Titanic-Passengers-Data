# FED intern task 2020

## Summary

This Application is built to visualise the data set of Titanic Passengers; provided by Kaggle Public Open data (https://www.kaggle.com/c/titanic/data), in the form of table.

At high level two different component has been used to display table and chart, React route library is used to switch between route and charts component.

The table only displays to the data of the passenger who has paid the fair. Also, it has the capability to display the data dynamically according to the filter options selected, The filter options provided are:
Sex
Fare
Ticket class
Embarked
Survival

The charts component has different charts drawn using recharts library.


## Application configuration

Most of the application configuration is done in the util file. Any changes (Changing table headings, way of filtering data, pre-processing data) that needs to be done should be addressed in util file (/src/components/util/util.js).

## Running Application

```
cd fed-intern-test-2020

npm install

npm start
```
