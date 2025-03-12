import { SectionHeader } from "../shared/header/SectionHeader";

const videos = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/ppR_QhxqgEE?si=W0nAq7bXKZoxydpQ",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/ppR_QhxqgEE?si=W0nAq7bXKZoxydpQ",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/ppR_QhxqgEE?si=W0nAq7bXKZoxydpQ",
  },
];

const FromAmbassadors = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10 2xl:space-y-24">
      {/* Section Header */}
      <SectionHeader title="From our ambassadors." />

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="relative group cursor-pointer">
            <iframe
              width="100%"
              height="400"
              src={video.videoUrl}
              title={`YouTube Video ${video.id}`}
              className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 object-contain"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FromAmbassadors;
