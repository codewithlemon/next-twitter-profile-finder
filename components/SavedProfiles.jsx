import { useContext } from "react"
import { SavedProfilesContext } from "../context/SavedProfiles"
import TrashIcon from "../components/icons/TrashIcon"
import CopyIcon from "../components/icons/CopyIcon"

function SavedProfiles() {
  const { savedProfiles, deleteProfile } = useContext(SavedProfilesContext)

  return (
    <>
      {savedProfiles.length > 0 ? (
        <div className="mt-6">
          <p className="font-medium mb-2">Profiles Saved</p>
          <ul>
            {savedProfiles.map((savedProfile) => {
              return (
                <li
                  key={savedProfile.id}
                  className="grid grid-cols-[1fr_auto] items-center mb-3 last:mb-0"
                >
                  <div>@{savedProfile.username}</div>
                  <div className="flex">
                    <button
                      type="button"
                      className="px-3 py-2 sm:ml-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200 text-gray-700 font-normal flex items-center gap-1 font-[Roboto] text-sm"
                      onClick={() => {
                        navigator.clipboard.writeText(savedProfile.id)
                      }}
                    >
                      <CopyIcon />
                      <div>Twitter ID</div>
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 sm:ml-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200 text-red-700 font-normal"
                      onClick={() => {
                        deleteProfile(savedProfile.id)
                      }}
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </>
  )
}

export default SavedProfiles
