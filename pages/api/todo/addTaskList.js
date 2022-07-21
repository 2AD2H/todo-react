import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";
import { apiRoute } from "../../../utils";

export default withApiAuthRequired(async function handler(req, res) {
  const { accessToken } = await getAccessToken(req, res);
  const newTaskListName = "untitle List";
  const apiRes = await fetch(`${apiRoute}/api/TaskLists`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newTaskListName,
    }),
  });
  res.status(200).end();
});
