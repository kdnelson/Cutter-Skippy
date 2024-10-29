import './App.scss';
import { useEffect, useState } from 'react'
import Cutter from './assets/widgets/cutter';

const App = () => {
  const X_LARGE_MIN_MEDIA_WIDTH = 1201;
  const LARGE_MIN_MEDIA_WIDTH = 992;
  const MEDIUM_MIN_MEDIA_WIDTH = 768;
  const SMALL_MIN_MEDIA_WIDTH = 576;  
  const X_SMALL_MIN_MEDIA_WIDTH = 515;
  const XX_SMALL_MIN_MEDIA_WIDTH = 470;
  const XXX_SMALL_MIN_MEDIA_WIDTH = 320;
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const getDimention = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', getDimention);
    return () => {
      window.removeEventListener('resize', getDimention);
    };
  }, [screenSize]);

  return (
    <div className="cutter-main-banner">
      <div className="container">
        <div className="cutter-main-banner-content">
          <h2>
            <div className="row justify-content-center">
              USCGC Skippy
            </div>
          </h2>
        </div>
      </div>

      <div>{screenSize >= XXX_SMALL_MIN_MEDIA_WIDTH && screenSize < XX_SMALL_MIN_MEDIA_WIDTH && (<div className="media-size-xxx-small"><Cutter /></div>)}</div>
      <div>{screenSize >= XX_SMALL_MIN_MEDIA_WIDTH && screenSize < X_SMALL_MIN_MEDIA_WIDTH && (<div className="media-size-xx-small"><Cutter /></div>)}</div>
      <div>{screenSize >= X_SMALL_MIN_MEDIA_WIDTH && screenSize < SMALL_MIN_MEDIA_WIDTH && (<div className="media-size-x-small"><Cutter /></div>)}</div>
      <div>{screenSize >= SMALL_MIN_MEDIA_WIDTH && screenSize < MEDIUM_MIN_MEDIA_WIDTH && (<div className="media-size-small"><Cutter /></div>)}</div>
      <div>{screenSize >= MEDIUM_MIN_MEDIA_WIDTH && screenSize < LARGE_MIN_MEDIA_WIDTH && (<div className="media-size-medium"><Cutter /></div>)}</div>
      <div>{screenSize >= LARGE_MIN_MEDIA_WIDTH && screenSize < X_LARGE_MIN_MEDIA_WIDTH && (<div className="media-size-large"><Cutter /></div>)}</div>
      <div>{screenSize >= X_LARGE_MIN_MEDIA_WIDTH && (<div className="media-size-x-large"><Cutter /></div>)}</div>
      <div className="bottom-waves" alt=""/>
    </div>
  )
}

export default App;
