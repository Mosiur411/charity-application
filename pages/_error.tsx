import { NextPage, GetServerSideProps } from 'next'

type ErrorPageProps = {
  statusCode?: number
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => (
  <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
)

export const getServerSideProps: GetServerSideProps<ErrorPageProps> = async ({ res }) => {
  const statusCode = res ? res.statusCode : 404
  return { props: { statusCode } }
}

export default ErrorPage
