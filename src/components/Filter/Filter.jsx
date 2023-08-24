import React from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redax/filter/filterSlice';
import { selectFilterValue } from 'redax/filter/filterSelectors';
import { Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  const handleFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const resetFilter = () => {
    dispatch(setFilter(''));
  };

  return (
    <InputGroup w={{base: '185px', md:'230px', lg:'400px'}} mx='auto' >
      <Input
        variant='flushed'
        value={filterValue}
        type="text"
        placeholder="Search by names..."
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        name="search"
        onChange={handleFilterChange}
        
      />
      <InputRightElement>
      {!filterValue && <Icon as={BiSearch} color="customColor.200" />}
        {filterValue && <Icon as={BiX} onClick={resetFilter} color="customColor.200" />}
        </InputRightElement>
    </InputGroup>
  );
}

export default Filter;
