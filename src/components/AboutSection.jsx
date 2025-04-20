import React from "react";

const AboutSection = () => {
  const features = [
    {
      icon: "🟣",
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of designers, developers and marketers",
    },
    {
      icon: "🔴",
      title: "In sync with you",
      description:
        "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
    },
  ];
  return (
    <div>
      <section
        id="about"
        className="w-full bg-gray-200 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {/* col 1 */}
            <div>
              <p className="text-sm text-purple-600 font-bold mb-2">
                Achieve More
              </p>
              <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-800 mb-4">
                Purpose is to help you achieve your goals
              </h2>
            </div>
            {/* col 2 -- two bullet points*/}
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
              {features.map((feature, index) => (
                <div key={index} className="flex  space-x-4">
                  <div className="w-12 h-12 flex items-center justify-start rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-900 text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
