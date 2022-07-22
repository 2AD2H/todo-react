import { withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0'
import { apiRoute } from '../../../../../utils'

export default withApiAuthRequired(async function handler(req, res) {
  const { accessToken } = await getAccessToken(req, res)
  const { taskListId } = req.query
  const apiRes = await fetch(`${apiRoute}/api/Tasks/${taskListId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  })
  res.json(await apiRes.json())
})
