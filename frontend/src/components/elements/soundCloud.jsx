export const SoundCloud = (url) => {
  return (
    <div className="Soundcloud">
      <iframe
        width="100%"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${url.url}`}
      ></iframe>
    </div>
  );
};
