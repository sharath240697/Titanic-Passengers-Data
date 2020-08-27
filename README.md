## FED intern task 2020

To begin:

```
cd fed-intern-test-2020

npm install

npm start
```
This Application is built to visualise the data set of Titanic Passengers; provided by Kaggle Public Open data (https://www.kaggle.com/c/titanic/data), in the form of table.

At high level two different component has been used to display table and chart, React route library is used to switch between route and charts component.

The table only displays to the data of the passenger who has paid the fair. Also, it has the capability to display the data dynamically according to the filter options selected, The filter options provided are:
Sex
Fare
Ticket class
Embarked
Survival

The charts component has different charts drawn using recharts library.

Application configuration

Most of the application configuration is done in the util file. Any changes (Changing table headings, way of filtering data, pre-processing data) that needs to be done should be addressed in util file (/src/components/util/util.js).

Personal Note
The task could've been completed in much efficient manner, for example UI Design, Chartings etc., but due to time constraints it was bit tough managing University workload (Projects, tests & assignments), AWS exam preparation and this  task. I believe I've given my best within this time constraint but could do much better. 


*Note: replace all the text below with your summary / findings when you have completed the task*

The following task relates to passenger records from the Titanic sinking in 1912.
Query the API link to get the data and **create a table that shows passenger records that meet the following criteria below.**
**The table should be dynamic and can ideally be filtered by certain fields.**

The table should:

- only show passengers who paid for a fare (Done)
- not show the number of siblings / spouses related to each passenger (Done)
- show passengers based upon where they embarked (HalfDone)
- show passengers that did or did not survive (HalfDone)
- show passengers by gender and ticket class
-  classifies their ticket fare as either cheap (less than 20), regular (between 20-100), expensive (more than 100)
- Extra / Optional: Draw a chart to represent the data. You can decide what you'd like to visualise!

Replace the text in this README file and write a brief summary of your findings and how you approached the task. You are open to using any JavaScript packages and libraries. We recommend Recharts for charting.

Array methods are preferred (such as `map`, `reduce` over for loops).

You will be assessed on how well you structure and write your code, comments, and how you choose to display this information. Extra points for usability, creativity and design!

To get started, read and add your work to the `Task.jsx` file.
To get the data, it would be ideal to fetch it from the URL provided in the file.
If you struggle with this, a subset of the data can be found in the `data` folder.

Please upload your solution to a private github/bitbucket/etc repository (hide them from your competition!) and add backend@quantiful.co.nz as a collaborator.

Please submit your entry by **Friday 28th August 2020, 5pm.**

Don't worry if you haven't completed it! You're more than welcome to make an incomplete submission - just let us know when you submit your entry.

Good luck and happy coding! :D
