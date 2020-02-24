import { withApollo } from '../lib/apollo'

const IndexPage = () => (
    <h1>Events</h1>
)

export default withApollo({ ssr: true })(IndexPage)