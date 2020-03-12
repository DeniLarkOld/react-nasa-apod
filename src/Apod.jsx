import React, { useEffect, useState } from 'react';
import { translateText } from './apiTranslate';

export const Apod = ({copyright, date, explanation, hdurl, title, url}) => {
  if(!copyright) copyright = '';

  let [rusExplanation, setRusExplanation] = useState('');
  let [rusTitle, setRustitle] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      const text = await translateText(explanation);
      await setRusExplanation(text);
    }
    
    fetchData();
  }, [explanation]);

  useEffect(() => {
    const fetchData = async () => {
      const text = await translateText(title);
      await setRustitle(text);
    }
    
    fetchData();
  }, [title]);

  return(
    <div className="apod">
      <h3>{title}</h3>
      <h4>{rusTitle}</h4>
      <div>{date}</div>
      <img src={url} alt={title + ' ' + copyright}/>
      <div className="explanation">
        <div className="explanation__eng">{explanation}</div>
        <div className="explanation__rus">{rusExplanation}</div>
      </div>
    </div>
  );
}