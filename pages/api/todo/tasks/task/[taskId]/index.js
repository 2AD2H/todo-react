import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";
import { apiRoute } from "../../../../../../utils";

export default withApiAuthRequired(async function handler(req, res) {
  const { accessToken } = await getAccessToken(req, res);
  const { taskId } = req.query;

  if (req.method === "PUT") {
    const apiRes = await fetch(`${apiRoute}/api/Tasks/${taskId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body.updateTask),
    });
    res.status(200).end();
  } else if (req.method === "DELETE") {
    const apiRes = await fetch(`${apiRoute}/api/Tasks/${taskId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    res.status(200).end();
  }
});
