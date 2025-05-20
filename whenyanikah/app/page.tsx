'use client';

import Image from 'next/image';

type TeamMember = {
  name: string;
  nim: string;
  description: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Mahceka Yankee',
    nim: '22.11.4912',
    description: 'Informatika Amikom Yogyakarta',
    image: '/mahceka.jpg',
  },
  {
    name: 'Zaidan Rifky P. P.',
    nim: '22.11.4912.02',
    description: 'Informatika Amikom Yogyakarta',
    image: '/zaidan.jpg',
  },
  {
    name: 'Hossain Wismaya Rayhan',
    nim: '22.11.4911',
    description: 'Informatika Amikom Yogyakarta',
    image: '/hossain.jpg',
  },
];

export default function OurTeam() {
  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-4xl font-bold text-center md:text-5xl bg-clip-text text-orange-500 bg-gradient-to-r from-fern-green-500 to-fern-green-400">
            Tim Digital Business
          </h2>
          <p className="max-w-xl mx-auto text-center text-gray-600 text-lg">
            Perkenalkan tim kami yang mengerjakan project Digital Business -{' '}
            <span className="text-fern-green-500 font-semibold">
              When Yan Nikah
            </span>
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {teamMembers.map((member) => (
              <div
                key={member.nim}
                className="flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-full py-8 bg-gradient-to-r from-fern-green-500 to-fern-green-400 flex justify-center">
                  <div className="relative">
                    <div className="w-36 h-36 rounded-full bg-white p-1">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="rounded-full w-full h-full object-cover"
                        width={144}
                        height={144}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center w-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <div className="flex flex-col items-center space-y-3 mb-4">
                    <span className="bg-fern-green-100 text-fern-green-800 text-sm font-medium px-4 py-1 rounded-full">
                      NIM: {member.nim}
                    </span>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
