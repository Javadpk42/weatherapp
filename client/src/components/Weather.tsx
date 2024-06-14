import React, { useState, useEffect } from 'react';
import { getWeather } from '../services/weatherService';

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const handleFetchWeather = async () => {
      try {
        const weatherData = await getWeather("Moscow");
        console.log(weatherData);
        setData(weatherData);
      } catch (err) {
        console.error(err);
      }
    };

    handleFetchWeather();
  }, []);

  return (
    <div className="flex flex-col justify-center font-semibold text-white bg-white">
      <section className="flex flex-col">
        <img
          loading="lazy"
          src="../../public/bg.jpg"
          alt=""
          className="absolute inset-0 size-full"
        />
        <div className="block sm:flex px-12 py-24">
          <div>
            <header className="flex relative flex-col items-center px-16 py-5 w-full font-medium text-orange-300 bg-amber-100 rounded-[35px]">
              <div className="flex gap-3 self-stretch whitespace-nowrap">
                <div className="flex flex-col">
                  <h1 className="self-center text-2xl">Today</h1>
                  <div className="flex gap-5 mt-11 text-8xl">
                    <img
                      loading="lazy"
                      src={`https://openweathermap.org/img/wn/${data?.icon}@2x.png`}
                      alt="Weather icon"
                      className="shrink-0 self-start aspect-square fill-orange-300 w-[72px]"
                    />
                    <div className="flex-auto">{data?.temperature.toFixed(0)}</div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/feebbfe38d4ae701ffa4cfdb0ff57b999d6545299a6b6bf9973fa5535b45de26?apiKey=62cb0e3201dd4b038734137173080a0d&"
                  alt="Weather icon"
                  className="shrink-0 my-auto aspect-square fill-orange-300 w-[15px]"
                />
              </div>
              <h2 className="mt-10 text-xl font-semibold">{data?.description}</h2>
              <div className="mt-6 text-base">{data?.location}</div>
              <time className="mt-6 text-base">{new Date().toLocaleDateString()}</time>
              <section className="flex gap-2.5 self-stretch mx-3.5 mt-7 text-base">
                <div className="grow">Feels like {data?.feels_like.toFixed(0)}</div>
                <div className="shrink-0 self-start  h-2.5 bg-orange-300 rounded-xl" />
                <div>Sunset {new Date(data?.sunset * 1000).toLocaleTimeString()}</div>
              </section>
            </header>
          </div>
          <div className="px-80">
            <section className="flex relative flex-col  w-full text-base rounded-3xl backdrop-blur-[21px] bg-transparent">
              <div className="shrink-0 mt-7 h-px rounded-xl bg-white bg-opacity-50" />
              <div className=" text-white">
                <h3 className="text-xl font-semibold">Additional Weather Information</h3>
                <p>Cloudiness: {data?.clouds?.all}%</p> 
                <p>Pressure: {data?.pressure} hPa</p>
                <p>Humidity: {data?.humidity}%</p>
                <p>Wind Speed: {data?.wind?.speed} m/s</p> 
              </div>
            </section>

            <div className="relative mt-14 text-xl">Overview</div>
            <p className="relative self-start mt-6 text-base">
              {data?.location} has a temperature of {data?.temperature.toFixed(0)}°C.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Weather;
