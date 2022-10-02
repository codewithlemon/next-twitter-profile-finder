import { createContext, useEffect, useState } from "react"

export const SavedProfilesContext = createContext()

export const SavedProfilesProvider = ({ children }) => {
  const [savedProfiles, setSavedProfiles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  function retrieveSavedProfiles() {
    const savedProfilesStr = localStorage.getItem("savedProfiles")
    if (savedProfilesStr) setSavedProfiles(JSON.parse(savedProfilesStr))
  }

  function commitSavedProfiles(newSavedProfiles) {
    const savedProfilesStr = JSON.stringify(newSavedProfiles)
    localStorage.setItem("savedProfiles", savedProfilesStr)
  }

  function addProfile(newProfile) {
    const newSavedProfiles = [...savedProfiles, newProfile]
    setSavedProfiles(newSavedProfiles)
    commitSavedProfiles(newSavedProfiles)
  }

  function deleteProfile(unwantedProfileId) {
    const newSavedProfiles = savedProfiles.filter(
      (savedProfile) => savedProfile.id !== unwantedProfileId
    )
    setSavedProfiles(newSavedProfiles)
    commitSavedProfiles(newSavedProfiles)
  }

  useEffect(() => {
    retrieveSavedProfiles()
    setIsLoading(false)
  }, [])

  return (
    <SavedProfilesContext.Provider
      value={{ savedProfiles, isLoading, addProfile, deleteProfile }}
    >
      {children}
    </SavedProfilesContext.Provider>
  )
}
