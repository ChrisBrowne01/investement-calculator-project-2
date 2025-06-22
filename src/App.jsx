import React, { useState } from 'react';
import Header from './components/Header.jsx';
import { UserInput } from './components/UserInput.jsx';
import OutputData from './components/Output.jsx';
import './index.css'
import './App.css'

function App() {
    // Initial state for the investment inputs (now managed in App.jsx)
  const initialUserInput = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  };

  const [userInput, setUserInput] = useState(initialUserInput);
  const [currency, setCurrency] = useState('$'); // Currency state (Bonus 3)

  // Function to handle changes in input fields
  const handleInputChange = (inputIdentifier, newValue) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: +newValue // Convert to number
    }));
  };

  // Function to handle resetting all inputs to their initial values
  const handleReset = () => {
    setUserInput(initialUserInput);
  };

  // Input validation: Check if duration is positive (Bonus 1)
  // We'll also use this to ensure all other fields are positive, as required.
  const inputIsValid = 
    userInput.initialInvestment > 0 &&
    userInput.annualInvestment > 0 &&
    userInput.expectedReturn > 0 &&
    userInput.duration > 0;

  return (
    <div className='min-h-screen bg-gray-900 text-gray-100 font-sans'>
      <Header 
        title= "7.2 - Practical - Investment Calculator" 
        subtitle="Meet your Financial InvestMate" 
      />
      <UserInput 
        userInput={userInput} // userInput
        onInputChange={handleInputChange} // onChangeCustInput={callUserInput} 
        onReset={handleReset}
        currency={currency}
        onCurrencyChange={setCurrency}
      />
      
      {/* Conditionally render OutputData based on input validation (Bonus 1) */}
      {inputIsValid ? (
        <OutputData inputValue={userInput} currency={currency} />
      ) : (
        <p className="text-red-400 text-center mt-4">
          Please ensure all investment values and duration are positive.
        </p>
      )}
    </div>
  )
}

export default App

// Instructions:

/** Task 1:Create a new file called OutputData.jsx in your components folder. */
// -- Check 
/** Task 2:Set up the basic structure of the OutputData component:
*     import React from 'react';
*     import { calculateInvestmentResults } from '../util/investment';
*     
*     const OutputData = ({ inputValue }) => {
*       // Component logic will go here
*       return (
*         <div>
*           {/ Output display will go here /}
*         </div>
*       );
*     };
*     
*     export default OutputData;
*/
// -- Check 
/** Task 3:Implement the calculation logic inside the component:
*     const resultData = calculateInvestmentResults({
*       initialInvestment: +inputValue.initialInvestment,
*       annualInvestment: +inputValue.annualInvestment,
*       expectedReturn: +inputValue.expectedReturn,
*       duration: +inputValue.duration
*     });
*/
// -- Check 
/** Task 4:Create a basic table structure to display the results:
*     return (
*       <table>
*         <thead>
*           <tr>
*             <th>Year</th>
*             <th>Investment Value</th>
*             <th>Interest (Year)</th>
*             <th>Total Interest</th>
*             <th>Invested Capital</th>
*           </tr>
*         </thead>
*         <tbody>
*           {resultData.map((yearData, index) => (
*             <tr key={index}>
*               <td>{yearData.year}</td>
*               <td>{yearData.investmentValue.toFixed(2)}</td>
*               <td>{yearData.interest.toFixed(2)}</td>
*               <td>{yearData.totalInterest.toFixed(2)}</td>
*             </tr>
*           ))}
*         </tbody>
*       </table>
*     );
*/
// -- Check 
/** Task 5:Update your App.jsx to include the OutputData component:
*     import React, { useState } from 'react';
*     import Header from './components/Header';
*     import UserInput from './components/UserInput';
*     import OutputData from './components/OutputData';
*     
*     function App() {
*       const [userInput, setUserInput] = useState({
*         initialInvestment: 10000,
*         annualInvestment: 1200,
*         expectedReturn: 6,
*         duration: 10
*       });
*     
*       const handleInputChange = (inputIdentifier, newValue) => {
*         setUserInput(prevInput => ({
*           ...prevInput,
*           [inputIdentifier]: +newValue
*         }));
*       };
*     
*       return (
*         <>
*           <Header />
*           <UserInput userInput={userInput} onInputChange={handleInputChange} />
*           <OutputData inputValue={userInput} />
*         </>
*       );
*     }
*     
*     export default App;
*/
// -- Check 
/** Task 6:Add some basic CSS to style your table (in index.css or a separate CSS file):
*     table {
*       width: 100%;
*       border-collapse: collapse;
*       margin-top: 2rem;
*     }
*     
*     th, td {
*       border: 1px solid #ddd;
*       padding: 8px;
*       text-align: right;
*     }
*     
*     th {
*       background-color: #f2f2f2;
*       font-weight: bold;
*     }
*     
*     tr:nth-child(even) {
*       background-color: #f9f9f9;
*     }
*/
// -- Check 
// Bonus Challenges:

// 1.Implement error handling for invalid input (e.g., negative numbers or non-numeric input).
// -- Check 
// 2.Add a feature to highlight the row with the highest interest earned.
// -- Check 
// 3.Create a chart or graph to visually represent the investment growth over time.
// -- Check 