import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
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
  __typename?: "Query";
  /** A simple type for getting started! */
  hello?: Maybe<Scalars["String"]>;
  invoiceList?: Maybe<Array<Maybe<Invoice>>>;
};

export enum InvoiceStatus {
  Approved = "APPROVED",
  Paid = "PAID",
  ApprovalRequested = "APPROVAL_REQUESTED",
}

export type Invoice = {
  __typename?: "Invoice";
  id?: Maybe<Scalars["ID"]>;
  netPrice?: Maybe<Scalars["Int"]>;
  totalPrice?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["String"]>;
  status?: Maybe<InvoiceStatus>;
  isCancelled?: Maybe<Scalars["Boolean"]>;
};

export type InvoiceCreateInput = {
  name?: Maybe<Scalars["String"]>;
  netPrice?: Maybe<Scalars["Int"]>;
};

export type InvoiceUpdateInput = {
  name?: Maybe<Scalars["String"]>;
  netPrice?: Maybe<Scalars["Int"]>;
  isCancelled?: Maybe<Scalars["Boolean"]>;
  status?: Maybe<InvoiceStatus>;
  id: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  invoiceCreate?: Maybe<Invoice>;
  invoiceUpdate?: Maybe<Invoice>;
};

export type MutationInvoiceCreateArgs = {
  invoice?: Maybe<InvoiceCreateInput>;
};

export type MutationInvoiceUpdateArgs = {
  invoice?: Maybe<InvoiceUpdateInput>;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type CreateInvoiceMutationVariables = Exact<{
  input?: Maybe<InvoiceCreateInput>;
}>;

export type CreateInvoiceMutation = { __typename?: "Mutation" } & {
  invoiceCreate?: Maybe<
    { __typename?: "Invoice" } & Pick<Invoice, "id" | "name">
  >;
};

export type GetInvoicesQueryVariables = Exact<{ [key: string]: never }>;

export type GetInvoicesQuery = { __typename?: "Query" } & {
  invoiceList?: Maybe<
    Array<
      Maybe<
        { __typename?: "Invoice" } & Pick<
          Invoice,
          | "id"
          | "name"
          | "netPrice"
          | "totalPrice"
          | "status"
          | "isCancelled"
          | "createdAt"
        >
      >
    >
  >;
};

export const CreateInvoiceDocument = gql`
  mutation createInvoice($input: InvoiceCreateInput) {
    invoiceCreate(invoice: $input) {
      id
      name
    }
  }
`;
export type CreateInvoiceMutationFn = Apollo.MutationFunction<
  CreateInvoiceMutation,
  CreateInvoiceMutationVariables
>;

/**
 * __useCreateInvoiceMutation__
 *
 * To run a mutation, you first call `useCreateInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInvoiceMutation, { data, loading, error }] = useCreateInvoiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateInvoiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateInvoiceMutation,
    CreateInvoiceMutationVariables
  >
) {
  return Apollo.useMutation<
    CreateInvoiceMutation,
    CreateInvoiceMutationVariables
  >(CreateInvoiceDocument, baseOptions);
}
export type CreateInvoiceMutationHookResult = ReturnType<
  typeof useCreateInvoiceMutation
>;
export type CreateInvoiceMutationResult = Apollo.MutationResult<CreateInvoiceMutation>;
export type CreateInvoiceMutationOptions = Apollo.BaseMutationOptions<
  CreateInvoiceMutation,
  CreateInvoiceMutationVariables
>;
export const GetInvoicesDocument = gql`
  query getInvoices {
    invoiceList {
      id
      name
      netPrice
      totalPrice
      vatRate
      status
      isCancelled
      createdAt
    }
  }
`;

/**
 * __useGetInvoicesQuery__
 *
 * To run a query within a React component, call `useGetInvoicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInvoicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInvoicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInvoicesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetInvoicesQuery,
    GetInvoicesQueryVariables
  >
) {
  return Apollo.useQuery<GetInvoicesQuery, GetInvoicesQueryVariables>(
    GetInvoicesDocument,
    baseOptions
  );
}
export function useGetInvoicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetInvoicesQuery,
    GetInvoicesQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetInvoicesQuery, GetInvoicesQueryVariables>(
    GetInvoicesDocument,
    baseOptions
  );
}
export type GetInvoicesQueryHookResult = ReturnType<typeof useGetInvoicesQuery>;
export type GetInvoicesLazyQueryHookResult = ReturnType<
  typeof useGetInvoicesLazyQuery
>;
export type GetInvoicesQueryResult = Apollo.QueryResult<
  GetInvoicesQuery,
  GetInvoicesQueryVariables
>;
