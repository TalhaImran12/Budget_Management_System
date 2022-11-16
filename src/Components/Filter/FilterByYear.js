
import './FilterByYear.css';

const FilterByYear = (props) => {
    const dropDownChangeHandler=(event)=>{
        // It will pass the value to parent(Expenses)
        props.onChangeFilter(event.target.value);

    }




  return (
    
      <div className="filter_control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
            <option value='2024'>2024</option>
        </select>
      </div>
    
  );
};
export default FilterByYear;
