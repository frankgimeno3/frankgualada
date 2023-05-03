export const ProfilesPreview = () => {
  return (
    <>
      <div className="bg-amber-400">
        <div className="h-20vh max-w-7xl ml-20 mt-20 ">
          <h3 className="text-gray-800">Profiles Preview</h3>
        </div>
      </div>
      <div className="ml-20">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-medium mt-4">Search Citizens by Name</h3>
          <p className="text-sm text-gray-600 mt-2">
            Search for citizens by name to find out their information, current
            state and current location
          </p>

          <form className="mt-4 flex items-center">
            <input
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-72 px-4 py-2 mr-2"
              type="text"
              placeholder="Antonio García Oviedo"
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Search
            </button>
          </form>

          <div className="border-t border-gray-300 mt-4 w-72">
            <p className="text-gray-600 py-4 px-2">No such citizen found.</p>
          </div>
        </div>
      </div>
    </>
  );
};
