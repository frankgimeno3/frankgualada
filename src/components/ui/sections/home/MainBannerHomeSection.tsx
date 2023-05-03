import { useEffect, useState } from "react";
export const MainBannerHomeSection = () => {
  const [height, setHeight] = useState("100vh");
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    document.querySelector("video").playbackRate = 0.8;
    setHeight(`${window.innerHeight}px`);
  }, []);
  return (
    <section
      className="relative mt-0"
      style={{
        height,
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        loop
        poster="/img/bannerImages/home-video-poster.png"
        className="absolute w-full h-screen mt-0 z-0 object-cover"
        style={{
          height,
        }}
      >
        <source src="/video/alto-palatinado-31556.mp4" type="video/mp4" />
      </video>
           
      <div className="relative flex items-center justify-center mt-20 pt-20 h-full">
        <h1 className="hover:text-amber-400">F</h1>
        <h1 className="hover:text-amber-400">r</h1>
        <h1 className="hover:text-amber-400">a</h1>
        <h1 className="hover:text-amber-400">n</h1>
        <h1 className="hover:text-amber-400">k</h1>
        <h1 className="hover:text-amber-400">g</h1>
        <h1 className="hover:text-amber-400">u</h1>
        <h1 className="hover:text-amber-400">a</h1>
        <h1 className="hover:text-amber-400">l</h1>
        <h1 className="hover:text-amber-400">a</h1>
        <h1 className="hover:text-amber-400">d</h1>
        <h1 className="hover:text-amber-400">a</h1>
      </div>
    </section>
  );
};
