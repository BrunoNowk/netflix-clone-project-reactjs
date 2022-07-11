/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import fetchsDb from './fetchsDb';
import MovieSection from './components/MovieSection';
import './App.css';

export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAllList = async () => {
      let list = await fetchsDb.getHomeLists();
      setMovieList(list);
    };
    loadAllList();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
