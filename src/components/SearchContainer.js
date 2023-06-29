import React from 'react'
import { FormRow, FormRowSelect} from '.'
import {useAppContext} from '../context/appContext'
import Wrapper from '../assets/wrappers/SearchContainer'
import { useState,useMemo } from 'react'

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('');
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,

  } = useAppContext()

  const handleSearch = (e) => {
    handleChange({name: e.target.name, value: e.target.value})
  }
  const handleSubmit =(e) => {
    e.preventDefault()
    setLocalSearch('')
    clearFilters()
  }
  const debounce = () => {
    let timeoutId ;
    return (e) => {
      setLocalSearch(e.target.value)
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        handleChange({name: e.target.value, value: e.target.value})
      }, 1000)
    }
  }
  const optimizedDebounce = useMemo(() => debounce(),[])
  return (
    <Wrapper>
      <form className='form'>
        <h4>Search form</h4>
        {/*Search position */}
        <div className='form-center'>
          <FormRow
            type='text'
            name='search'
            value={localSearch}
            handleChange={optimizedDebounce}
          ></FormRow>
          {/* search by status */}
          <FormRowSelect 
            labelText='status' 
            name='searchStatus' 
            value={searchStatus} 
            handleChange={handleSearch}
            list={['all',...statusOptions]}
          />
          {/* Search by type */}
          <FormRowSelect 
            labelText='type' 
            name='searchType' 
            value={searchStatus} 
            handleChange={handleSearch}
            list={['all',...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect 
            name='sort' 
            value={sort} 
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          ></button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer