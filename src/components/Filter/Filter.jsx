import React from 'react';
import { FilterLabel, FilterInput } from "./Filter.styled";
import { useDispatch, useSelector } from 'react-redux';
import { contactFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';


export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  
  const filterChange = e => {
    dispatch(contactFilter(e.currentTarget.value));
  };


 return (
  <FilterLabel>
    Find contacts by Name
     <FilterInput
      type="text"
       value = {filter}
       placeholder="Search contact"
      onChange={filterChange}
    />
  </FilterLabel>
);
};
    


