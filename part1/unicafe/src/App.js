import React, { useState } from 'react';

const Header = ({ text }) => (
  <>
    <h1>{text}</h1>
  </>
)

const Button = ({ onClick, text }) => (
  <>
    <button onClick={onClick}>
      {text}
    </button>
  </>
)

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({ ratings }) => {
  const { good, neutral, bad } = ratings

  const countRatingTotal = () => {
    return good + neutral + bad
  }

  const calculateRatingAverage = () => {
    return (good + neutral*0 - bad)/countRatingTotal()
  }

  const calculatePositivePercentage = () => {
    return (good/countRatingTotal())*100 + ' %'
  }

  if (countRatingTotal() == 0) {
    return (
      <>
        <p>
          No feedback given
        </p>
      </>
    )
  }
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text='good' value={good}/>
          <StatisticLine text='neutral' value={neutral}/>
          <StatisticLine text='bad' value={bad}/>
          <StatisticLine text='all' value={countRatingTotal()}/>
          <StatisticLine text='average' value={calculateRatingAverage()}/>
          <StatisticLine text='positive' value={calculatePositivePercentage()}/>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleRateAsGood = () => {
    setGood(good + 1)
  }

  const handleRateAsNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleRateAsBad = () => {
    setBad(bad + 1)
  }

  const createStateObject = () => (
    {
      good: good,
      neutral: neutral,
      bad: bad
    }
  )

  return (
    <div>
      <Header text='Give feedback'/>
      <Button onClick={handleRateAsGood} text='good'/>
      <Button onClick={handleRateAsNeutral} text='neutral'/>
      <Button onClick={handleRateAsBad} text='bad'/>
      <Header text='Statistics'/>
      <Statistics ratings={createStateObject()}/>
    </div>
  )
}

export default App
