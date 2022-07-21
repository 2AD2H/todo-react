import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";
import { apiRoute } from "../../../utils";

export default withApiAuthRequired(async function handler(req, res) {
  const { accessToken } = await getAccessToken(req, res);
  const apiRes = await fetch(`${apiRoute}/api/TaskLists`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(await apiRes.json());
});
