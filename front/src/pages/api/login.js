import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";

async function loginRoute(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Mehtod is not allowed" });
    return;
  }
  const { username, password } = await req.body;
  try {
    var ldapAuthentication = require("ldap-authentication");
    let options = {
      ldapOpts: {
        url: "ldap://116.203.37.217:389",
        tlsOptions: { rejectUnauthorized: false }
      },
      userDn: `uid=${username},ou=people,dc=smartech,dc=ir`,
      userPassword: password,
      userSearchBase: "ou=people,dc=smartech,dc=ir",
      usernameAttribute: "uid",
      attributes: [
        "dn",
        "sn",
        "cn",
        "company",
        "displayName",
        "description",
        "objectClass"
      ],
      username: username
    };

    let ldapuser = await ldapAuthentication.authenticate(options);

    const user = { isLoggedIn: true, username: ldapuser?.displayName };
    //const user = { isLoggedIn: true, username:'tina ameri' }
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
