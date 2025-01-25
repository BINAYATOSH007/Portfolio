import { socialMedia } from "@/data";
import { Key } from "react";


const SocialMediaIcons = () => {
  return (
    <div className='flex items-center md:gap-3 gap-6'>
      {socialMedia.map((profile) => (
        <a
          key={profile.id}
          href={profile.link}
          target="_blank"
          rel="noopener noreferrer"
          className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter
          backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-200'
        >
          <img src={profile.img} alt="icons" width={20} height={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;