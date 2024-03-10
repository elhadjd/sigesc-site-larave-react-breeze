import React from 'react';
import { FaLightbulb } from 'react-icons/fa'; // Ícone de lâmpada
import { motion } from 'framer-motion';

const TeamMemberCard = ({ member }) => {
  const { name, role, bio, image, isFounder } = member;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden mx-auto"
    >
      <div className="relative">
        <img className="w-full h-56 object-cover object-center" src={image} alt={name} />
        {isFounder && (
          <div className="absolute top-0 right-0 bg-yellow-400 rounded-full p-2 m-2">
            <FaLightbulb className="text-xl text-white" />
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <p className="mt-2 text-gray-700 text-base">{bio}</p>
      </div>
    </motion.div>
  );
};

const teamMembers = [
  {
    name: "Mamoudou ",
    role: "CEO & Fundador",
    bio: "Mamoudou é o visionário por trás da nossa solução, com uma paixão por inovação.",
    alt: 'Mamoudou CEO Programador na sigesc-tech',
    image: "/team/mamoudou.png",
    isFounder: true,
  },
  {
    name: "Wilson manuel",
    role: "Full-stack & Fundador",
    bio: "Wilson é o visionário por trás da nossa solução, com uma paixão por inovação.",
    alt: 'Wilson Manuel Programador na sigesc-tech',
    image: "/team/wilson.jpg",
    isFounder: false,
  },
  {
    name: "Josimar",
    role: "Design",
    bio: "Josimar o visionário por trás da nossa solução, com uma paixão por inovação.",
    alt: 'josimar design grafico na sigesc-tech',
    image: "/team/wilson.jpg",
    isFounder: false,
  }
];

const TeamSection = () => {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
