import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
function AccordianItem({id, expanded, handleChange, title, content}) {
    const isExpanded = expanded === id
  return (
    <>
     <Accordion expanded={expanded === id} onChange={handleChange(id)} className='acc_parent' sx={{borderRight: '5px solid #5e88fc', background: '#ffffff', cursor: 'pointer'}}>
                            <AccordionSummary aria-controls={`${id}-content`} id={`${id}-header`}  expandIcon={isExpanded ? <RemoveIcon sx={{color : '#434345'}}/> : <AddIcon sx={{color : '#434345'}}/>}  sx={{ flexDirection: 'row-reverse' }}>
                                <Typography component="span" className='acc_title' sx={{mr: 1, fontSize: '18px'}}>{title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{pt: 0, pb: 4}}>
                                <Typography  className='acc-content' sx={{color: '#8790af', maxWidth: '460px',fontSize: '16px', pr: 4}}>
                                    {content}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
    </>
  )
}

export default AccordianItem