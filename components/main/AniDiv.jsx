import React, { useState, useEffect } from "react";

const AniDiv = () => {
  const [random, setRandom] = useState({ a: 50, b: 50, c: 50, d: 50 });
  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  useEffect(() => {
    setInterval(() => {
      setRandom((state) => ({ ...state, a: rand(1, 500) }));
      setRandom((state) => ({ ...state, b: rand(1, 200) }));
      setRandom((state) => ({ ...state, c: rand(1, 500) }));
      setRandom((state) => ({ ...state, d: rand(1, 300) }));
    }, 2000);
  }, []);
  return (
    <div className="animation_div">
      <div style={{ transform: `translate(${random.a}%, -${random.b}%)` }}></div>
      <div style={{ transform: `translate(-${random.c}%, ${random.b}%)` }}></div>
      <div style={{ transform: `translate(${random.c}%, -${random.d}%)` }}></div>
      <div style={{ transform: `translate(-${random.a}%, ${random.d}%)` }}></div>
      <div style={{ transform: `translate(-${random.d}%, ${random.b}%)` }}></div>
      <div style={{ transform: `translate(${random.a}%, -${random.d}%)` }}></div>
    </div>
  );
};

export default AniDiv;
