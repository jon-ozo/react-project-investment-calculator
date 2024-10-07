import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import InvestmentReport from "./components/investmentReport";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {isValidInput && <InvestmentReport input={userInput} />}
      {!isValidInput && <p className="center">Please enter a duration data greatr than 0</p>}
    </>
  );
}

export default App;
