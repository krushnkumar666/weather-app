import React from 'react';
import './forecast.css';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";

const WEEK_DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const Forecast = ({ data }) => {
    const dayInWeek = new Date().getDay();
   const forecastDays =  WEEK_DAYS.slice(dayInWeek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,dayInWeek));

  return (
    <div className="forecast">
    <label className='title'>Daily</label>
      <Accordion allowZeroExpanded>
        {data && data.list && data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='daily-item'>
                    <img src={`icons/${item.weather[0].icon}.png`} alt='image' className='icon-small'/>
                    
                    <label className='day'>{forecastDays[idx]}</label>
                    <label className='description'>{item.weather[0].description}</label>
                    <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className='daily-details-grid'>
                    <div className='daily-details-grid-item'>
                        <label>Pressure: </label>
                        <label>{item.main.pressure}</label>
                    </div>
                    <div className='daily-details-grid-item'>
                        <label>Humidity: </label>
                        <label>{item.main.humidity}</label>
                    </div>
                    <div className='daily-details-grid-item'>
                        <label>Clouds: </label>
                        <label>{item.clouds.all}</label>
                    </div>
                    <div className='daily-details-grid-item'>
                        <label>Winds speed: </label>
                        <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className='daily-details-grid-item'>
                        <label>Sea Level: </label>
                        <label>{item.main.sea_level}m</label>
                    </div>
                    <div className='daily-details-grid-item'>
                        <label>Feels Like : </label>
                        <label>{Math.round(item.main.feels_like)}°C</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
