import { useContext } from "react"
import { SavedProfilesContext } from "../context/SavedProfiles"

const UserProfile = ({ user }) => {
  const { savedProfiles, addProfile } = useContext(SavedProfilesContext)

  const profileIsSaved = savedProfiles.some(
    (savedProfile) => savedProfile.id === user.id
  )

  function handleClick() {
    addProfile({
      username: user.username,
      id: user.id,
    })
  }

  return (
    <div className="max-w-[26rem] mx-auto pt-3 grid grid-cols-[1fr_auto]">
      <div className="grid grid-cols-[auto_1fr] mb-1">
        <p className="text-right pr-2 font-medium">Twitter ID:</p>
        <p>{user.id}</p>
        <p className="text-right pr-2 font-medium">Username:</p>
        <p>
          <a
            href={`http://twitter.com/${user.username}`}
            target="_blank"
            className="twitter-profile-link hover:underline underline-offset-4"
            rel="noreferrer"
          >
            @{user.username}
          </a>
        </p>
        <p className="text-right pr-2 font-medium">Display name:</p>
        <p>{user.name}</p>
      </div>
      <div className="text-center">
        {!profileIsSaved && (
          <button
            type="button"
            className="h-10 px-4 py-2 sm:ml-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200 text-gray-700 font-normal"
            onClick={handleClick}
          >
            Save
          </button>
        )}
      </div>
    </div>
  )
}

export default UserProfile
