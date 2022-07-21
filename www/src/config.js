// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2uv7lnnfts9r94c2vjj85hlp5e",     // CognitoClientID
  "api_base_url": "https://ggv7afcsha.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "inestodoapp-lambda-refarch-webapp-stack.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d13dzhhplxeqn6.amplifyapp.com"                                      // AmplifyURL
};

export default config;
