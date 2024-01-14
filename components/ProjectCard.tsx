import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  projectTitle: string;
  deskripsi: string;
  gambar: StaticImageData;
}

export default function ProjectCard({
  projectTitle,
  deskripsi,
  gambar,
}: Props) {
  return (
    <div>
      <div className="border border-primary rounded-2xl p-10 hover:px-5 hover:bg-secondary  w-80 h-80 overflow-hidden ">
        <div className="flex justify-between">
          <div className="pb-8">
            <p className="uppercase font-bold tracking-[5px]">WEB DESIGN</p>
            <p className="font-bold text-2xl">{projectTitle}</p>
          </div>
          <div>
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.1504 25.6606L22.1474 24.9524C22.1474 22.0092 22.3197 19.3258 22.5794 17.5766L22.8068 16.4889C22.9334 15.9128 23.0997 15.2568 23.2732 14.922C23.9081 13.6971 25.1495 12.9392 26.4782 12.9392H26.5939C27.46 12.9678 29.2796 13.7279 29.2796 13.7543C32.2076 14.9829 37.8564 18.6906 40.4653 21.334L41.2234 22.1276C41.422 22.3427 41.645 22.5972 41.7835 22.7956C42.246 23.4081 42.4773 24.1659 42.4773 24.9238C42.4773 25.7698 42.2177 26.5562 41.7268 27.1995L40.9478 28.0401L40.7733 28.2195C38.4061 30.7861 32.2251 34.9829 28.9916 36.2673L28.5035 36.4544C27.916 36.6649 27.0929 36.9161 26.5939 36.9392C25.9589 36.9392 25.3524 36.7916 24.7742 36.5008C24.0521 36.0932 23.4761 35.4499 23.1575 34.6921C22.9546 34.1678 22.6361 32.5926 22.6361 32.564C22.3441 30.9757 22.1747 28.4696 22.1504 25.6606ZM6.47729 24.9383C6.47729 23.2618 7.82346 21.9025 9.4838 21.9025L16.8823 22.5568C18.1848 22.5568 19.2408 23.6231 19.2408 24.9383C19.2408 26.2558 18.1848 27.3198 16.8823 27.3198L9.4838 27.9741C7.82346 27.9741 6.47729 26.6148 6.47729 24.9383Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            className="rounded-t-lg flex align-center h-full overflow-hidden bg-cover"
            src={gambar}
            width="200"
            alt="object"
          />
        </div>
      </div>
    </div>
  );
}
