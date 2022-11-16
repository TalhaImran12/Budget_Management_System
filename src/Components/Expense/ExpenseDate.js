import './ExpenseDate';

function ExpenseDate(probs)
{
    const d= probs.date;
return(
    <div className='expeseDate'>
        {d}
    </div>
);
}

export default ExpenseDate;