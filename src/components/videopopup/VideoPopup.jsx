import VideoModal from './YouTubeVideoModal';

export default function VideoPopup() {
  return (
    <section
      className="video_section"
      style={{
        backgroundImage: `url(/images/video.jpg)`,
      }}
    >
      <div className="container">
        <div className="video_content">
          <VideoModal videoId="i8leeedH71c" />
          <h2>Watch our video tutorial</h2>
        </div>
      </div>
    </section>
  );
}