import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Application from "./application/Application";
import Count from "./counter/Count";
import AppProviders from "./providers/AppProviders";
import MuiMode from "./mui/MuiMode";

function App() {
  return (
    // <div className="App">
    //   <Application />
    //   <Count/>
    // </div>
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;

//ABOUT TEST
//.test.tsx,.spect.tsx,__tests__ is src folder
//can use it instead of test,fit font only,xit for skip
// test are written inside App.test.tsx or Greet.test.tsx
//test(name,function,timeout is optional default is 5s)
// watch mode: If we commit out code with App.test.tsx then jest will only run Greet.test.tsx
// test.only runs only that particular test and skip other tests
// test.skip skip that particular test and run other tests
// "a" will run all test
// "o" runs only changed files
// "p" runs test only for selected file
// "p" runs test only for selected test name like "Greet renders correctly"
// it is case sensitive to ignore this we use (/hello/i) for Hello
// npm run test runs all the .test files

//GROUPING TEST WITH JEST
// describe("GreetName",()=>{}) renders GreetName as Main heading,can only and skip and can use nested describe
//

//getByRole RTL Queries
//textbox for input type text or textbox,combobox for select,checkbox ,button ,  https://www.w3.org/TR/html-aria/#docconformance
//since we have textarea nad input both type textbox so we need to give name,name is case-sensitive
//h1-h6 have same role "heading",we can use level instead of name in like level: 1,level: 2 with h1,h2etc

//getByLabelText
//It take label name directly getByLabelText("Name")
//it picks data inside <label></label>
//if labels with same name

//getByPlaceholderText
//get you role by placeholder text

//getByText
//gives text inside p,span and div

//getByDisplayValue
// return input,textarea or select with matching display value

//getAllByRole
//doesn't breaks in multiple items inside an array

//queryByRole or querAllByRole
// As getAllByRole and getByRole through an error if they can'nt find the matching element
//so queryByRole returns null if no elements match

//findByRole and findAllByRole
//returns promise which resolves when an element is found
//rejected after element is not found for 1s

//Manual Queries

//debugging Methods
// screen.debug()
//logRoles()

//User Interactions
//POINTERS
// toHaveTextContent("0")  gives text inside h1-h6
//import "userEvent" from testing library, then userEvent.click
//all user api area async so use async await user.click()

//API
//click is a convenience api
