import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function Header() {
  const [menuItems] = useState([
    { id: 1, name: 'Home', link: '#' },
    { id: 2, name: 'About', link: '#' },
    { id: 3, name: 'Services', link: '#' },
    { id: 4, name: 'Contact', link: '#' },
  ]);
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className=" z-20 ">
      <Navbar />
    </header>
  );
}

{
  /* <header className="sticky  px-5 flex justify-between max-w-7xl mx-auto z-20 xl:items-center "> */
}
// </header>
// <motion.div
//   initial={{
//     x: -500,
//     opacity: 0,
//     scale: 0.5,
//   }}
//   animate={{
//     x: 0,
//     opacity: 1,
//     scale: 1,
//   }}
//   transition={{
//     duration: 1.5,
//   }}
//   className="flex flex-row items-center"
// >
//   {/* Social Icons */}
//   <SocialIcon url="https://www.youtube.com/ferdiyan" fgColor="gray" bgColor="transparent" />
//   <SocialIcon url="https://github.com/Alferdiyan" fgColor="gray" bgColor="transparent" />
//   <SocialIcon url="https://www.linkedin.com/in/eka-ferdiyanto-11ab551b2/" fgColor="gray" bgColor="transparent" />
//   <SocialIcon url="https://www.instagram.com/ferdiyan.id" fgColor="gray" bgColor="transparent" />
// </motion.div>
// <motion.div
//   initial={{
//     x: 500,
//     opacity: 0,
//     scale: 0.5,
//   }}
//   animate={{
//     x: 0,
//     opacity: 1,
//     scale: 1,
//   }}
//   transition={{ duration: 1.5 }}
//   className="flex flex-row items-center text-gray-300 cursor-pointer"
// >
//   <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
//   <p className="uppercasse hidden md:inline-flex">Get In touch</p>
// </motion.div>
