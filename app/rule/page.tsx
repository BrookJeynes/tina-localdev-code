import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "@/tina/__generated__/client";

async function Rules() {
    let cursor = null;
    let hasNextPage = true;

    let pages = [];

    while (hasNextPage) {
        const rulesResponse = await client.queries.ruleConnection({ first: 50, after: cursor });
        cursor = rulesResponse.data.ruleConnection.pageInfo.endCursor;
        hasNextPage = rulesResponse.data.ruleConnection.pageInfo.hasNextPage;

        pages.push(rulesResponse.data.ruleConnection.edges);
    }

    return (
        <div>
            <a href="http://localhost:3000/admin/index.html#/collections/edit/rule/Test-rule-1">test</a>
            <ul>
                {
                    pages.flat().map(rule => <li key={rule?.node?._sys.filename}>
                        <p key={rule?.node?.id}>{rule?.node?.title}</p>
                    </li>)
                }
            </ul>

            { /* <TinaMarkdown content={rules[0].body} /> */}
        </div>
    );
}

export default Rules;
