// import { FilterLabel, FilterInput } from "./Filter.styled";
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import './Filter.modyle.css';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <label className="filter">
      Find contacts by name:
      <input
        className="filter__input"
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}


//  return (
//   <FilterLabel>
//     Find contacts by Name
//      <FilterInput
//       type="text"
//        value = {filter}
//        placeholder="Search contact"
//       onChange={filterChange}
//     />
//   </FilterLabel>
// );
// };
    


