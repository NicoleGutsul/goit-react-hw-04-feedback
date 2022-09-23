const Controls = ({addFeedback, options}) => {
    return (
        <>
            <p>Please leave Feedback</p>
            {options.map(state => {
                return (
                    <button 
                       key={state}
                       type="button"
                       name={state}
                       onClick={() => {
                        addFeedback(state);
                       }}> 
                       {state}
                    </button>
                )
            })}
        </>
    )
}

export default Controls;