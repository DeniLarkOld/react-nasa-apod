import React, { useEffect, useState } from 'react';
import { getApod } from './apiNasa';
import { Apod } from './Apod';
import moment from 'moment';
import { Header } from './Header';

function App() {
  let [apods, setApods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const todayApod = await getApod();
      await setApods([todayApod])
    }
    
    fetchData();

    
    
  }, []);

  const clickMoreBtn = async () => {
    const lastDay = apods[apods.length - 1].date;
    const prevDay = moment(lastDay).add(-1, 'day').format('YYYY-MM-DD');

    const prevApod = await getApod(prevDay);
    await setApods([...apods, prevApod]);
  }

  return (
    <div>
      <Header />
      <div className="container">
        {apods.map(a => (<Apod 
          key={a.date}
          copyright={a.copyright}
          date={a.date}
          explanation={a.explanation}
          title={a.title}
          url={a.url}
        />))}
      </div>

      {apods.length >= 1 &&
        <div className="container container--btn-more">
          <button onClick={clickMoreBtn}>ЕЩЕ</button>
        </div>
      }
    </div>
  );
}

export default App;
