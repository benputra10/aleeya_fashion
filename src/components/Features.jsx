const Features = () => {
  const features = [
    {
      emoji: "👗",
      title: "Desain Eksklusif",
      description: "Gamis dengan motif unik yang tidak pasaran",
    },
    {
      emoji: "🧵",
      title: "Jahitan Premium",
      description:
        "Dijahit rapi dengan teknik khusus untuk kenyamanan maksimal",
    },
    {
      emoji: "🌈",
      title: "Warna Cerah",
      description: "Pilihan warna menarik yang disukai anak-anak",
    },
    {
      emoji: "👶",
      title: "Ramah Anak",
      description: "Bahan lembut dan tidak membuat iritasi kulit sensitif",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            Kenapa Memilih <span className="text-pink-500">Aleeya Fashion</span>
            ?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Kualitas premium yang membuat si kecil nyaman seharian
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-pink-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-6">{feature.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="hidden lg:block absolute right-0 -mt-32 w-32 h-32 bg-pink-200 rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default Features;
