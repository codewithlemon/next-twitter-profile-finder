const twitterAcessToken = process.env.TWITTER_ACCESS_TOKEN

export default async function handler(req, res) {
  const { username } = req.query

  if (!username) {
    res.status(400).json({
      message: "Missing or invalid username",
    })
    return
  }

  const response = await fetch(
    `https://api.twitter.com/2/users/by/username/${username}`,
    {
      headers: {
        Authorization: `Bearer ${twitterAcessToken}`,
      },
    }
  )
  const fetchedUser = await response.json()

  if (!fetchedUser.data) {
    res.status(404).json({
      message: "No such user",
    })
    return
  }

  res.json({
    message: "User found",
    user: fetchedUser.data,
  })
}
