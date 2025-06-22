import React, { useState } from 'react';
// If App.css is only used for UserInput styling, you might be able to remove this import later
// import '../App.css'; // This import will no longer be needed for UserInput's specific styles

export const UserInput = ({ userInput, onInputChange, onReset, currency, onCurrencyChange }) => {
  
  return (
    // Section container with Tailwind styles
    <section id="user-input" className="p-6 max-w-xl mx-auto my-8 bg-gray-800 rounded-lg shadow-lg">
      <form>
      {/* Input fields grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-4">
        {/* Initial Investment */}
        <div className="flex flex-col w-40 gap-6 p-2">
          <label htmlFor="initialInvestment" className="block text-gray-200 text-sm font-bold mb-1">Initial Investment ({currency})</label>
          <input type="number" 
            id="initialInvestment" // Link label to input
            value={userInput.initialInvestment}
            required
            onChange={(e) => onInputChange('initialInvestment', e.target.value)}
            // Tailwind classes for input field:
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
          />
        </div>

        {/* Input group for Annual Investment */}
        <div className="flex flex-col w-40 gap-6 p-2">
          <label htmlFor="annualInvestment" className="block text-gray-200 text-sm font-bold mb-1">
            Annual Investment ({currency})
            </label>
            <input
              type="number"
              id="annualInvestment"
              value={userInput.annualInvestment}
              required
              onChange={(e) => onInputChange('annualInvestment', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
            />
          </div>

          {/* Expected Return */}
          <div className="flex flex-col w-40 gap-6 p-2">
            <label htmlFor="expectedReturn" className="block text-gray-200 text-sm font-bold mb-1">
              Expected Return (%)
            </label>
            <input
              type="number"
              id="expectedReturn"
              value={userInput.expectedReturn}
              required
              onChange={(e) => onInputChange('expectedReturn', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
            />
          </div>

          {/* Duration */}
          <div className="flex flex-col w-40 gap-6 p-2">
            <label htmlFor="duration" className="block text-gray-200 text-sm font-bold mb-1">
              Duration (years)
            </label>
            <input
              type="number"
              id="duration"
              value={userInput.duration}
              required
              onChange={(e) => onInputChange('duration', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
            />
          </div>
        </div>

        {/* Currency Selector (Bonus 3) */}
        <div className="flex flex-col mb-4">
            <label htmlFor="currency" className="block text-gray-200 text-sm font-bold mb-1">Currency</label>
            <select
                id="currency"
                value={currency}
                // Use onCurrencyChange prop
                onChange={(e) => onCurrencyChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
            >
                <option value="$">USD ($)</option>
                <option value="€">EUR (€)</option>
                <option value="£">GBP (£)</option>
            </select>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-4">
          {/* Reset Button (Bonus 2) */}
          <button
            type="button" // Use type="button" to prevent form submission
            onClick={onReset} // Use onReset prop
            className="px-4 py-2 rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
          >
            Reset
          </button>
          {/* Calculate button (optional, but good for explicit action) */}
          <button
            type="submit" // This will trigger default form submission for now
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Calculate
          </button>
        </div>
      </form>
      {/* Validation message is now handled in App.jsx */}
    </section>
  );
};

export default UserInput;
