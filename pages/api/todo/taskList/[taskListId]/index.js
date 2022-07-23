import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";
import { apiRoute } from "../../../../../utils";

export default withApiAuthRequired(async function handler(req, res) {
  const { accessToken } = await getAccessToken(req, res);
  const { taskListId } = req.query;

  if (req.method === "PUT") {
    const apiRes = await fetch(`${apiRoute}/api/TaskLists/${taskListId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body.updateTaskList),
    });
    res.status(200).end();
  } else if (req.method === "DELETE") {
    const apiRes = await fetch(`${apiRoute}/api/TaskLists/${taskListId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    res.status(200).end();
  }
});
