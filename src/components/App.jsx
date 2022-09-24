import { useState } from "react";
import Controls from "./Controls/Controls";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // };
  
  const addFeedback = fb => {
    switch (fb) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        console.log('error');
        break;
    };
  };

   
    const countTotalFeedback = () => {
      return good + bad + neutral
    };
    
   

   const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback())
   };
  
 

  
  

  
    return (
      <>
         <Controls 
            addFeedback={addFeedback}
            options={['good', 'neutral', 'bad']}
         />
         {good > 0 || bad > 0 || neutral > 0 ? (
            <Statistics
            title={'Statistics'}
            good={good} 
            bad={bad} 
            neutral={neutral}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
         ) : (
          <Notification/>
         )}
         
      </>
    );
  }
