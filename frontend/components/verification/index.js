// react page
import {
  SismoConnectButton,
  AuthType,
  ClaimType,
} from "@sismo-core/sismo-connect-react";

const config = {
  appId: "0x69efe45d7f788ded971546dc608297f9",
  vault: { impersonate: ["vitalik.eth", "twitter:dhadrien_"] },
  displayRawResponse: false,
};
import { StateContext } from "@/store/StateContext";
import { useContext } from "react";

export const Sismo = () => {
  const { verified, setVerified } = useContext(StateContext);

  return (
    <div className="text-center ">
      <SismoConnectButton
        config={config}
        auths={[
          { authType: AuthType.VAULT },
          { authType: AuthType.EVM_ACCOUNT },
          { authType: AuthType.TWITTER },
        ]}
        claims={[
          {
            groupId: "0x0f800ff28a426924cbe66b67b9f837e2",
          },
        ]}
        signature={{ message: "Welcome To 3JOKERS" }}
        onResponse={async (response) => {
          const op = await fetch("/api/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ response }),
          });
          if (op.status === 200) {
            setVerified(true);
          } else {
            console.log("Sismo connect Error");
          }
        }}
      />
    </div>
  );
};
