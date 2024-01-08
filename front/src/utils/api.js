import { GraphQLClient, gql as _gql } from 'graphql-request';

import { GRAPHQL_ENDPOINT } from '@/utils/constants';

const client = new GraphQLClient(GRAPHQL_ENDPOINT, { headers: {} });
export default client;

export const gql = _gql;
