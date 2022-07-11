/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import fetchsDb from './fetchsDb';
import MovieSection from './components/MovieSection';
import './App.css';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAllList = async () => {
      let list = await fetchsDb.getHomeLists();
      setMovieList(list);
      console.log(list);

      let originals = list.filter((i) => i.slug === 'originals');
      let randomChosem = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosem];
      let chosenInfo = await fetchsDb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    };
    loadAllList();
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featureData && <FeatureMovie item={featureData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
