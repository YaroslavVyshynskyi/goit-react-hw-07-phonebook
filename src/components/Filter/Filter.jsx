import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from 'slice/filterSlice';
import css from './Filter.module.css'

const Filter = () => {
    const filter = useSelector(store => { return store.filter.value });
    
    const dispatch = useDispatch();

    const onChange = e => {
        dispatch(changeFilter(e.target.value))
    };

    return (
        <label>
            <p className={css.filter__title}>Find contacts by name</p>
            <input type="text" value={filter} onChange={onChange} />
        </label>
    )    
};

export default Filter;