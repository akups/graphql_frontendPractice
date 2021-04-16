import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Query = {
  __typename?: 'Query';
  /** A simple type for getting started! */
  hello?: Maybe<Scalars['String']>;
  orderList?: Maybe<Array<Maybe<Order>>>;
};

export enum OrderStatus {
  Placed = 'PLACED',
  Paid = 'PAID',
  OutForDelivery = 'OUT_FOR_DELIVERY',
  Delivered = 'DELIVERED'
}

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['ID']>;
  netPrice?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  isCancelled?: Maybe<Scalars['Boolean']>;
};

export type OrderCreateInput = {
  name?: Maybe<Scalars['String']>;
  netPrice?: Maybe<Scalars['Int']>;
};

export type OrderUpdateInput = {
  name?: Maybe<Scalars['String']>;
  netPrice?: Maybe<Scalars['Int']>;
  isCancelled?: Maybe<Scalars['Boolean']>;
  status?: Maybe<OrderStatus>;
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  orderCreate?: Maybe<Order>;
  orderUpdate?: Maybe<Order>;
};


export type MutationOrderCreateArgs = {
  order?: Maybe<OrderCreateInput>;
};


export type MutationOrderUpdateArgs = {
  order?: Maybe<OrderUpdateInput>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type CreateOrderMutationVariables = Exact<{
  input?: Maybe<OrderCreateInput>;
}>;


export type CreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { orderCreate?: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'name'>
  )> }
);

export type GetOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrdersQuery = (
  { __typename?: 'Query' }
  & { orderList?: Maybe<Array<Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'name' | 'netPrice' | 'totalPrice' | 'status' | 'isCancelled' | 'createdAt'>
  )>>> }
);


export const CreateOrderDocument = gql`
    mutation createOrder($input: OrderCreateInput) {
  orderCreate(order: $input) {
    id
    name
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, baseOptions);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const GetOrdersDocument = gql`
    query getOrders {
  orderList {
    id
    name
    netPrice
    totalPrice
    status
    isCancelled
    createdAt
  }
}
    `;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
        return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, baseOptions);
      }
export function useGetOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, baseOptions);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;