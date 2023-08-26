'use client';
import React, { useState, useEffect } from 'react';

const MeowArticle = () => {
  const [text, setText] = useState('Loading ....');
  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com/')
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);
  return <article>{text}</article>;
};

export default MeowArticle;
