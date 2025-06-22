// This function expects a JS object as an argument
// The object should contain the following properties
// - begInvestment: The initial investment amount
// - annInvestment: The amount invested every year
// - returnInv: The expected (annual) rate of return
// - yearlInv: The investment yearlInv (time frame)
export function calculateInvestmentResults(
    {
        begInvestment,
        annInvestment,
        returnInv,
        yearInv
    }
) {
    const annualData = [];
    let investmentValue = begInvestment;

    for(let i = 0; i < yearInv; i++){
        const interestEarnedInYear = investmentValue * (returnInv / 100);
        investmentValue += interestEarnedInYear + annInvestment;
        annualData.push({
            year: i + 1, // year identifier
            interest: interestEarnedInYear, // the amount of interest earned in this year
            valueEndOfYear: investmentValue, // investment value at end of year
            annualInvestment: annInvestment, // investment added in this year
        });
    }
    return annualData
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency.
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});