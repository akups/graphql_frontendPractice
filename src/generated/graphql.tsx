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


export type InvoiceListFilter = {
  name?: Maybe<Scalars['String']>;
  invoiceStatus?: Maybe<InvoiceStatus>;
};

export type Query = {
  __typename?: 'Query';
  /** A simple type for getting started! */
  hello?: Maybe<Scalars['String']>;
  invoiceList?: Maybe<Array<Maybe<Invoice>>>;
};


export type QueryInvoiceListArgs = {
  filter?: Maybe<InvoiceListFilter>;
};

export enum InvoiceStatus {
  Approved = 'APPROVED',
  Paid = 'PAID',
  ApprovalRequested = 'APPROVAL_REQUESTED',
  Processing = 'PROCESSING'
}

export type Invoice = {
  __typename?: 'Invoice';
  id: Scalars['ID'];
  netPrice?: Maybe<Scalars['Float']>;
  vatRate?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  invoiceStatus?: Maybe<InvoiceStatus>;
  isCancelled?: Maybe<Scalars['Boolean']>;
};

export type InvoiceCreateInput = {
  name?: Maybe<Scalars['String']>;
  netPrice?: Maybe<Scalars['Float']>;
};

export type InvoiceUpdateInput = {
  name?: Maybe<Scalars['String']>;
  netPrice?: Maybe<Scalars['Float']>;
  isCancelled?: Maybe<Scalars['Boolean']>;
  invoiceStatus?: Maybe<InvoiceStatus>;
  id: Scalars['ID'];
};

export type UploadedFileResponse = {
  __typename?: 'UploadedFileResponse';
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  invoiceCreate?: Maybe<Invoice>;
  invoiceUpdate?: Maybe<Invoice>;
  singleUpload: UploadedFileResponse;
};


export type MutationInvoiceCreateArgs = {
  invoice?: Maybe<InvoiceCreateInput>;
};


export type MutationInvoiceUpdateArgs = {
  invoice?: Maybe<InvoiceUpdateInput>;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
  invoiceId?: Maybe<Scalars['ID']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type CreateInvoiceMutationVariables = Exact<{
  input?: Maybe<InvoiceCreateInput>;
}>;


export type CreateInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { invoiceCreate?: Maybe<(
    { __typename?: 'Invoice' }
    & Pick<Invoice, 'id' | 'name' | 'netPrice' | 'totalPrice' | 'invoiceStatus' | 'isCancelled' | 'createdAt'>
  )> }
);

export type GetInvoicesQueryVariables = Exact<{
  filter?: Maybe<InvoiceListFilter>;
}>;


export type GetInvoicesQuery = (
  { __typename?: 'Query' }
  & { invoiceList?: Maybe<Array<Maybe<(
    { __typename?: 'Invoice' }
    & Pick<Invoice, 'id' | 'name' | 'invoiceStatus' | 'createdAt' | 'netPrice'>
  )>>> }
);

export type SingleUploadMutationVariables = Exact<{
  file: Scalars['Upload'];
  invoiceId: Scalars['ID'];
}>;


export type SingleUploadMutation = (
  { __typename?: 'Mutation' }
  & { singleUpload: (
    { __typename?: 'UploadedFileResponse' }
    & Pick<UploadedFileResponse, 'filename' | 'mimetype' | 'encoding' | 'url'>
  ) }
);


export const CreateInvoiceDocument = gql`
    mutation createInvoice($input: InvoiceCreateInput) {
  invoiceCreate(invoice: $input) {
    id
    name
    netPrice
    totalPrice
    invoiceStatus
    isCancelled
    createdAt
  }
}
    `;
export type CreateInvoiceMutationFn = Apollo.MutationFunction<CreateInvoiceMutation, CreateInvoiceMutationVariables>;

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
export function useCreateInvoiceMutation(baseOptions?: Apollo.MutationHookOptions<CreateInvoiceMutation, CreateInvoiceMutationVariables>) {
        return Apollo.useMutation<CreateInvoiceMutation, CreateInvoiceMutationVariables>(CreateInvoiceDocument, baseOptions);
      }
export type CreateInvoiceMutationHookResult = ReturnType<typeof useCreateInvoiceMutation>;
export type CreateInvoiceMutationResult = Apollo.MutationResult<CreateInvoiceMutation>;
export type CreateInvoiceMutationOptions = Apollo.BaseMutationOptions<CreateInvoiceMutation, CreateInvoiceMutationVariables>;
export const GetInvoicesDocument = gql`
    query getInvoices($filter: InvoiceListFilter) {
  invoiceList(filter: $filter) {
    id
    name
    invoiceStatus
    createdAt
    netPrice
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
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetInvoicesQuery(baseOptions?: Apollo.QueryHookOptions<GetInvoicesQuery, GetInvoicesQueryVariables>) {
        return Apollo.useQuery<GetInvoicesQuery, GetInvoicesQueryVariables>(GetInvoicesDocument, baseOptions);
      }
export function useGetInvoicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInvoicesQuery, GetInvoicesQueryVariables>) {
          return Apollo.useLazyQuery<GetInvoicesQuery, GetInvoicesQueryVariables>(GetInvoicesDocument, baseOptions);
        }
export type GetInvoicesQueryHookResult = ReturnType<typeof useGetInvoicesQuery>;
export type GetInvoicesLazyQueryHookResult = ReturnType<typeof useGetInvoicesLazyQuery>;
export type GetInvoicesQueryResult = Apollo.QueryResult<GetInvoicesQuery, GetInvoicesQueryVariables>;
export const SingleUploadDocument = gql`
    mutation singleUpload($file: Upload!, $invoiceId: ID!) {
  singleUpload(file: $file, invoiceId: $invoiceId) {
    filename
    mimetype
    encoding
    url
  }
}
    `;
export type SingleUploadMutationFn = Apollo.MutationFunction<SingleUploadMutation, SingleUploadMutationVariables>;

/**
 * __useSingleUploadMutation__
 *
 * To run a mutation, you first call `useSingleUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSingleUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [singleUploadMutation, { data, loading, error }] = useSingleUploadMutation({
 *   variables: {
 *      file: // value for 'file'
 *      invoiceId: // value for 'invoiceId'
 *   },
 * });
 */
export function useSingleUploadMutation(baseOptions?: Apollo.MutationHookOptions<SingleUploadMutation, SingleUploadMutationVariables>) {
        return Apollo.useMutation<SingleUploadMutation, SingleUploadMutationVariables>(SingleUploadDocument, baseOptions);
      }
export type SingleUploadMutationHookResult = ReturnType<typeof useSingleUploadMutation>;
export type SingleUploadMutationResult = Apollo.MutationResult<SingleUploadMutation>;
export type SingleUploadMutationOptions = Apollo.BaseMutationOptions<SingleUploadMutation, SingleUploadMutationVariables>;