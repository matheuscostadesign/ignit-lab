import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ljcd56mom@1yrswgf7n9/master",
  cache: new InMemoryCache()
})