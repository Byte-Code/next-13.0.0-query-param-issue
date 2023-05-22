import {GetServerSideProps} from "next";
import {useRouter} from "next/router";

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    const { query } = context;
    // Adding a get server side props function create two use cases:
    // - in server side navigation (refreshing the page), the query param that contain a // is trimmed of one / and the value retrieved is incorrect.
    // e.g. refreshing the current page will create the problem and the value of the query param 'test_param' is 'test/test'"
    // - in a client side navigation (click in the link of the root page), the query param that contain a // is not trimmed of one / and the value retrieved is correct.
    // e.g. navigating from / to test?test_param=test//test using the link the page does not have the problem and the query param 'test_param' is 'test//test'"
    // Removing the get server side props will also remove the problem

    console.log('GSSP QUERY', query);
    return { props: { } };
};

export default function Index() {
    const { query } = useRouter();
    const testParamVal = query['test_param'];

    console.log('query page', query);

    return (
        <ul>
            {query['test_param'] !== undefined ? testParamVal : 'missing test param query in url' }
        </ul>
    )
}
