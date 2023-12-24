const TeamMember = ({ name, role, imageUrl }) => {
    return (
      <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
        <div className="flex flex-col sm:-mx-4 sm:flex-row">
          <img
            className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
            src={imageUrl}
            alt={name}
          />
  
          <div className="mt-4 sm:mx-4 sm:mt-0">
            <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
              {name}
            </h1>
  
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              {role}
            </p>
          </div>
        </div>
  
        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt
          officia aliquam neque optio? Cumque facere numquam est.
        </p>
  
        <div className="flex mt-4 -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
            aria-label="Reddit"
          >
            <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 128 128"
              >
                <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" />
              </svg>
          </a>
  
          <a
            href="#"
            className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
            aria-label="Facebook"
          >
            <img class="w-5 h-5" src="github.svg" alt="github" />
          </a>
  
          <a
            href="#"
            className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
            aria-label="Github"
          >
            <img class="w-5 h-5" src="instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
    );
  };