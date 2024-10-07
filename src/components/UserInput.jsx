export default function UserInput({ userInput, onChange }) {

  return (
    <section id='user-input'>
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment-amount">Initial investment</label>
          <input onChange={(e)=> onChange('initialInvestment', e.target.value)} type='number' id='initial-investment-amount' value={userInput.initialInvestment} required />
        </p>
        <p>
          <label htmlFor="annual-investment-amount">Annual investment</label>
          <input onChange={(e)=> onChange('annualInvestment', e.target.value)} type='number' id='annual-investment-amount' value={userInput.annualInvestment} required />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected return</label>
          <input onChange={(e)=> onChange('expectedReturn', e.target.value)} type='number' id='expected-return' value={userInput.expectedReturn} required />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input onChange={(e)=> onChange('duration', e.target.value)} type='number' id='duration' value={userInput.duration} required />
        </p>
      </div>
    </section>
  )
}