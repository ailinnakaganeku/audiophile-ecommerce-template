type Image = {
  id: string;
  url: string;
  caption: string;
};

const images: Image[] = [
  {
    id: "1",
    url: "https://source.unsplash.com/random/800x800",
    caption: "A beautiful landscape",
  },
  {
    id: "2",
    url: "https://source.unsplash.com/random/800x801",
    caption: "A cute puppy",
  },
  {
    id: "3",
    url: "https://source.unsplash.com/random/800x802",
    caption: "A delicious pizza",
  },
  {
    id: "4",
    url: "https://source.unsplash.com/random/800x803",
    caption: "A stunning sunset",
  },
];

const Instagram: React.FC = () => {
  return (
    <section className="px-4 my-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Our Clients Posts
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <a
              key={image.id}
              href={image.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden bg-white shadow-lg"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover"
              />
              <div className="px-6 py-4">
                <p className="text-sm font-medium text-gray-800 mb-2">
                  {image.caption}
                </p>
                <div className="flex items-center">
                  <img
                    src="https://source.unsplash.com/random/40x40"
                    alt="Profile"
                    className="w-8 h-8 rounded-full mr-2 object-cover"
                  />
                  <p className="text-sm font-medium text-gray-700">username</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
