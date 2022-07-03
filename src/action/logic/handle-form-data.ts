// Takes in the data (context), success redirect path, and

import { json, redirect } from "@remix-run/node";

// session and commitSession function
export async function handleFormData({
  handleDataFn,
  context,
  successRedirectPath,
  session,
  commitSession,
  request,
}: {
  handleDataFn: any;
  context: any;
  successRedirectPath: string;
  session: any;
  commitSession: any;
  request: Request;
}) {
  // handle data - the data function should return a tuple
  // the first item in the tuple will be a boolean to indicate
  // whether the operation succeeded or failed

  // The second item in the tuple is the success or error message
  let handleDataResult: [boolean, string] = await handleDataFn(
    context,
    request
  );
  let [success, message] = handleDataResult;

  if (success) {
    context.dataHandlerSuccessMessage = message;
    context.dataHandlerErrorMessage = "";
    session.set("context", context);

    return redirect(successRedirectPath, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } else {
    context.dataHandlerSuccessMessage = "";
    context.dataHandlerErrorMessage = message;
    session.set("context", context);

    return json(
      {},
      {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      }
    );
  }
}
