import React, { useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './Pages/HomeLayout.jsx';
import Home from './Pages/Home.jsx';
import BlockPosts from './Pages/BlockPosts.jsx';
import About from './Pages/About.jsx';
import BlockPostsId from './Pages/BlockPostsId.jsx';

const App = () => {
  const cursorRef = useRef(null);
  const cursorCircleRef = useRef(null);

  useEffect(() => {
    const mouse = { x: -100, y: -100 };
    const pos = { x: 0, y: 0 };
    const speed = 0.1;

    const updateCoordinates = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', updateCoordinates);

    const getAngle = (diffX, diffY) => {
      return (Math.atan2(diffY, diffX) * 180) / Math.PI;
    };

    const getSqueeze = (diffX, diffY) => {
      const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
      const maxSqueeze = 0.15;
      const accelerator = 750;
      return Math.min(distance / accelerator, maxSqueeze);
    };

    const updateCursor = () => {
      const diffX = Math.round(mouse.x - pos.x);
      const diffY = Math.round(mouse.y - pos.y);

      pos.x += diffX * speed;
      pos.y += diffY * speed;

      const angle = getAngle(diffX, diffY);
      const squeeze = getSqueeze(diffX, diffY);

      const scale = `scale(${1 + squeeze}, ${1 - squeeze})`;
      const rotate = `rotate(${angle}deg)`;
      const translate = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

      cursorRef.current.style.transform = translate;
      cursorCircleRef.current.style.transform = rotate + scale;
    };

    const loop = () => {
      updateCursor();
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);

    const cursorModifiers = document.querySelectorAll('[cursor-class]');

    cursorModifiers.forEach((cursorModifier) => {
      cursorModifier.addEventListener('mouseenter', function () {
        const className = this.getAttribute('cursor-class');
        cursorRef.current.classList.add(className);
      });

      cursorModifier.addEventListener('mouseleave', function () {
        const className = this.getAttribute('cursor-class');
        cursorRef.current.classList.remove(className);
      });
    });

    return () => {
      window.removeEventListener('mousemove', updateCoordinates);
    };
  }, []);
  2
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/block_posts' element={<BlockPosts />} />
              <Route path='/about' element={<About />} />
              <Route path='/block_posts/:id' element={<BlockPostsId />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* Custom cursor */}
        <div id="cursor" ref={cursorRef} className="custom-cursor">
          <div className="cursor__circle" ref={cursorCircleRef}></div>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
