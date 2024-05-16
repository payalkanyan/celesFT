import {
  SismoConnect,
  AuthType,
  SismoConnectVerifiedResult,
  ClaimType,
  SismoConnectConfig,
  SignatureRequest,
  AuthRequest,
  ClaimRequest,
  SismoConnectResponse,
} from "@sismo-core/sismo-connect-server";
const config = {
  appId: "0x69efe45d7f788ded971546dc608297f9",
  vault: { impersonate: ["vitalik.eth", "twitter:dhadrien_"] },
  displayRawResponse: false,
};
export default function handler(req, res) {
  const sismoConnectResponse = req.body.response;
  const auths = [
    { authType: AuthType.VAULT },
    { authType: AuthType.EVM_ACCOUNT },
    { authType: AuthType.TWITTER },
  ];
  const claims = [
    {
      groupId: "0x0f800ff28a426924cbe66b67b9f837e2",
    },
  ];
  const signature = { message: "Welcome To 3JOKERS" };
  let result;
  (async () => {
    // reusing the exact same config as the front end's

    const sismoConnect = SismoConnect({ config });

    result = await sismoConnect.verify(sismoConnectResponse, {
      auths,
      claims,
      signature,
    });

    if (result) {
      res.status(200).json({ output: true });
    } else {
      res.status(400).json({ output: false });
    }
  })();
}
