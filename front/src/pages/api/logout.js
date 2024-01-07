import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";
import LogoutButton from "@/components/LogoutButton";
function logoutRoute(req, res) {
  req.session.destroy();
  res.json({ isLoggedIn: false, login: "", avatarUrl: "" });
}

export default withIronSessionApiRoute(logoutRoute, sessionOptions);
