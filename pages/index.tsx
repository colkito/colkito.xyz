import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world! <FaGithub />
      </h1> */}
      <header className="bg-white flex justify-between items-center p-6">
        <div className="flex items-center">
          <img src="https://via.placeholder.com/50" className="w-10 h-10 rounded-full" />
          <h1 className="ml-4 text-lg font-medium">UserName</h1>
        </div>
        <nav>
          <a href="#tweets" className="px-4 py-2 text-gray-800 hover:bg-gray-300">
            Tweets
          </a>
          <a href="#following" className="px-4 py-2 text-gray-800 hover:bg-gray-300">
            Following
          </a>
          <a href="#followers" className="px-4 py-2 text-gray-800 hover:bg-gray-300">
            Followers
          </a>
        </nav>
      </header>
      <section id="tweets" className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-medium mb-4">Tweets</h2>
        <div className="mb-4">
          <img src="https://via.placeholder.com/150" className="w-full rounded-lg" />
        </div>
        <p className="text-gray-800 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, magna a aliquam
          dictum, ipsum ipsum faucibus ipsum, sit amet bibendum massa ipsum a ipsum.
        </p>
        <div className="flex items-center text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-2 fill-current"
          >
            <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828a.8.8 0 001.212.784l3.028-1.528a.8.8 0 00.364-.928l-1.26-3.35a.8.8 0 00-.928-.364l-3.028 1.528a.8.8 0 00-.784 1.212l1.26 3.35c.132.363.4.636.732.738v.1a7.7 7.7 0 003.946-.85 7.7 7.7 0 01-2.522.502 7.74 7.74 0 003.002-2.522l-.002-.003z" />
          </svg>
          <a href="#" className="text-gray-800">
            5
          </a>
        </div>
      </section>
      <section id="following" className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-medium mb-4">Following</h2>
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/50" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <h3 className="text-gray-800 font-medium">FollowingName</h3>
            <p className="text-gray-600">@followingusername</p>
          </div>
        </div>
      </section>
      <section id="followers" className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-medium mb-4">Followers</h2>
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/50" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <h3 className="text-gray-800 font-medium">FollowerName</h3>
            <p className="text-gray-600">@followerusername</p>
          </div>
        </div>
      </section>
    </>
  );
}
