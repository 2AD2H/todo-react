import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";
import { apiRoute } from "../../../../../utils";

export default withApiAuthRequired(async function handler(req, res) {
  const { accessToken } = await getAccessToken(req, res);
  const { taskListId } = req.query;

  if (req.method === "GET") {
    const apiRes = await fetch(`${apiRoute}/api/Tasks/${taskListId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    res.json(await apiRes.json());
  } else if (req.method === "POST") {
    const apiRes = await fetch(`${apiRoute}/api/Tasks/${taskListId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body.newTask),
    });
    res.json(await apiRes.json());
  }
});
