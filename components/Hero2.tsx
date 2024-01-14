'use client';
import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BakgroundCircle';
import photo from '../public/image/Eka_ferdiyanto.png';
import Navbar from './Navbar';

export default function Hero2() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name's Eka Ferdiyanto",
      'Guy-who-love-coffee',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-4 items-center justify-center text-center">
      <div className="z-0">
        <BackgroundCircle />
      </div>
      <Image
        className="w-40 mx-auto object-cover rounded-full"
        src={photo}
        alt="personal"
      />
      <div>
        <h2 className="text-sm uppercase text-secondary font-bold   tracking-[10px] ">
          Web Developer & UI Designer
        </h2>
        <h1 className="text-3xl md:text-4xl font-semibold px-5">
          <span className="mr-5 text-secondary">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
      </div>

      <div className="flex gap-x-2 z-10">
        {/* <NavMenu href="#about">About</NavMenu>
        <NavMenu href="#project">Project</NavMenu>
        <NavMenu href="#skill">Skill</NavMenu>
        <NavMenu href="#experience">Experience</NavMenu>
        <NavMenu href="#contact">Contact Me</NavMenu> */}
      </div>
    </div>
  );
}

// import Image from 'next/image';
// import React from 'react';
// import { Cursor, useTypewriter } from 'react-simple-typewriter';
// import BackgroundCircle from './BakgroundCircle';
// import photo from '../public/image/Eka_ferdiyanto.png';
// import Link from 'next/link';

// type Props = {};

// export default function Hero({}: Props) {
//   const [text, count] = useTypewriter({
//     words: ["Hi, My Name's Eka Ferdiyanto", 'Guy-who-love-coffee', '<ButLovesToCodeMore />'],
//     loop: true,
//     delaySpeed: 2000,
//   });
//   return (
//     <div className="h-screen flex flex-col space-y-4 items-center justify-center text-center">
//       <BackgroundCircle />
//       <Image className="mx-auto object-cover rounded-full" src={photo} alt="" width={40} />
//       <div></div>
//       <div>
//         <h2 className="text-sm uppercase text-gray-500  tracking-[10px] ">Front End Developer</h2>
//         <h1 className="text-3xl md:text-5xl  font-semibold px-5">
//           <span className="mr-5">{text}</span>
//           <Cursor cursorColor="#f7ab0a" />
//         </h1>
//       </div>
//       <div className="gap-x-2">
//         <Link href="#About">
//           <button className="heroButton">About</button>
//         </Link>
//         <Link href="#Experience">
//           <button className="heroButton">Experience</button>
//         </Link>
//         <Link href="#Skills">
//           <button className="heroButton">Skills</button>
//         </Link>
//         <Link href="Project">
//           <button className="heroButton">Project</button>
//         </Link>
//       </div>
//     </div>
//   );
// }
