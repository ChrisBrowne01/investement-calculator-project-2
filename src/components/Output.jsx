import { calculateInvestmentResults, formatter } from "../util/investments"

const OutputData = ({inputValue, currency}) => {
  // Task 3: Implement the calculation logic inside the component
  // Map userInput state names to the function's expected parameter names
  const resultData = calculateInvestmentResults({
    begInvestment: +inputValue.initialInvestment, // Use '+' to ensure it's a number
    annInvestment: +inputValue.annualInvestment,
    returnInv: +inputValue.expectedReturn,
    yearInv: +inputValue.duration
  });

    // Bonus 2: Find the row with the highest interest for highlighting
  let maxInterest = 0;
  let maxInterestYearIndex = -1;

  if (resultData.length > 0) {
    maxInterest = resultData[0].interest; // Initialize with first year's interest
    maxInterestYearIndex = 0;

    for (let i = 1; i < resultData.length; i++) {
      if (resultData[i].interest > maxInterest) {
        maxInterest = resultData[i].interest;
        maxInterestYearIndex = i;
      }
    }
  }

  // Set the currency for the formatter
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency === '$' ? 'USD' : (currency === '€' ? 'EUR' : 'GBP'), // Map symbol to currency code
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return (
    // Task 4: Create a basic table structure to display the results
    // Task 6 (adapted for Tailwind): Add Tailwind classes to style the table
    <section className="max-w-4xl mx-auto mt-8 p-4 bg-gray-800 rounded-lg shadow-lg overflow-x-auto">
 
    <table id="results" className="w-full text-left table-auto border-collapse">
      <thead className="bg-gray-700">
        <tr>
          <th className="px-4 py-2 text-gray-800 border border-gray-600">Year</th>
          <th className="px-4 py-2 text-gray-800 border border-gray-600 text-right">Investment Value</th>
          <th className="px-4 py-2 text-gray-800 border border-gray-600 text-right">Interest (Year)</th>
          <th className="px-4 py-2 text-gray-800 border border-gray-600 text-right">Total Interest</th> 
          <th className="px-4 py-2 text-gray-800 border border-gray-600 text-right">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {/* Check if resultData is empty (e.g., duration is 0 or invalid) */}
        {resultData.length === 0 && (
          <tr>
            <td colSpan="5" className="px-4 py-4 text-center text-gray-400">
              No investment data available. Please enter valid duration (&gt; 0).
            </td>
          </tr>
        )}

        {resultData.map(((yearData, index) => {
          // Determine if this row has the highest interest (Bonus 2)
          const isHighestInterest = index === maxInterestYearIndex;
          
          const totalInterest = yearData.valueEndOfYear-
          yearData.annualInvestment * yearData.year - inputValue.initialInvestment;
          const totalAmountInv = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}
              className={`
                ${isHighestInterest ? 'bg-yellow-600 text-white font-bold' : (index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700')} 
                hover:bg-gray-600 transition-colors
              `}
            >
            <td className="px-4 py-2 border border-gray-600">{yearData.year}</td>
            <td className="px-4 py-2 border border-gray-600 text-right">{formatter.format(yearData.valueEndOfYear)}</td>
            <td className="px-4 py-2 border border-gray-600 text-right">{formatter.format(yearData.interest)}</td>
            <td className="px-4 py-2 border border-gray-600 text-right">{formatter.format(totalInterest)}</td>
            <td className="px-4 py-2 border border-gray-600 text-right">{formatter.format(totalAmountInv)}</td>       
          </tr>
          )}))}

      </tbody>

      {/* Check if resultData is empty (e.g., duration is 0 or invalid) */}
      {resultData.length === 0 && (
        <tr>
          <td colSpan="5" className="px-4 py-4 text-center text-gray-400">
            No investment data available. Please enter valid duration (&gt; 0).
          </td>
        </tr>
      )}

    </table>
    {/* Bonus Challenge 3: Chart/Graph - Placeholder */}
      <div className="mt-8 text-center text-gray-400">
        <p>
          For a visual representation of investment growth (Chart/Graph), you would integrate a charting library like Recharts or Chart.js here. This typically involves installing the library and mapping the `resultData` to its components.
        </p>
      </div>
    </section>
  );
}

export default OutputData;