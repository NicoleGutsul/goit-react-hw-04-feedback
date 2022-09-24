const Statistics = ({
    title,
    good, 
    bad, 
    neutral,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
}) => {
    return (
        <>
           <p>{title}</p>
           <p>
               Good: <span>{good}</span>
           </p>
           <p>
               Neutral: <span>{neutral}</span>
           </p>
           <p>
               Bad: <span>{bad}</span>
           </p>
           <p>
               Total: {countTotalFeedback}
           </p>
           <p>
               Positive Feadback: {countPositiveFeedbackPercentage ? countPositiveFeedbackPercentage + '%' : 0} 
           </p>
           
        </>
    );
};

export default Statistics;