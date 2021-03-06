import React, { useContext} from 'react'
import Col from 'react-bootstrap/Col'
import SecondLineBox from './SecondLineBox'
import { LanguageContext } from '../context'
import {DICT} from '../lang'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';

const SecondLine = ({dash, selectedDayRange, setSelectedDayRange}) =>{

   const [langContext] = useContext(LanguageContext);

	let res = dash === 'graph' ? (
		<>
		<Col xs={12} md={4}>

	<Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      shouldHighlightWeekends
    />
		
		</Col>
		
		<Col xs={12} md={4}>
			<SecondLineBox 
				border='success'
				title='Trends identified'
			/>
		</Col>
		
		<Col xs={12} md={4}>
			<SecondLineBox 
				border='warning'
				title='Method Selection'
			/>
		</Col></>) : (
		<>

		<Col xs={12} md={6}><SecondLineBox 

			 bg='light'
			 text='dark'
			 title={DICT[`TitleHowItWorks.${langContext}`]}
			 slogan={DICT[`SloganHowItWorks.${langContext}`]}
			 fullText ={DICT[`TextHowItWorks.${langContext}`]}
			 textButton ={DICT[`TextButtonHowItWorks.${langContext}`]}
			 modal = 'modalOne'
			 
		/></Col>
		<Col xs={12} md={6}><SecondLineBox 

			 bg='light' 
			 text='dark'
			 title={DICT[`TitleStepsToDo.${langContext}`]}
			 slogan={DICT[`SloganStepsToDo.${langContext}`]}
			 fullText ={DICT[`TextStepsToDo.${langContext}`]}
			 textButton ={DICT[`TextButtonStepsToDo.${langContext}`]}
			 modal = 'modalTwo'

		/></Col></>)

	return(
	<>
		{res}
	</>	
		)
}
export default SecondLine