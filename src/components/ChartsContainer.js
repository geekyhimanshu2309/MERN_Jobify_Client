import React,{useState} from 'react'
import BarChartComponents from './BarChart'
import {useAppContext} from '../context/appContext'
import Wrapper from '../assets/wrappers/ChartsContainer';
import AreaChartComponents from './AreaChart';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const {monthlyApplications: data } = useAppContext()

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart? 'AreaChart':'BarChart'}
      </button>
      {barChart? <BarChartComponents data={data} />:<AreaChartComponents data={data}/>}
    </Wrapper>
  )
}

export default ChartsContainer