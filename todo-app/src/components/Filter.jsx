import React from 'react';
import './Filter.css'

function Filter({ setFilter }) {
    return (
        <div>
            <label className='form-filter'>
                Filter:
                <select className='filter-select' onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </label>
        </div>
    );
}

export default Filter;
