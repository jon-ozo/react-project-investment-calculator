import { calculateInvestmentResults } from "../util";
import { formatter } from "../util";

export default function InvestmentReport({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Captal</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map(data => {
          const totalInterestValue = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
          const totalAmountInvested = data.valueEndOfYear - totalInterestValue;
          
          return <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(totalInterestValue)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>
          
        })}
      </tbody>
    </table>
  );
}