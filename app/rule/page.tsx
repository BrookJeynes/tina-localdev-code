import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "@/tina/__generated__/client";

async function Rules() {
    const rulesResponse = await client.queries.ruleConnection({ first: 100 });

    return (
        <div>
            <a href="http://localhost:3000/admin/index.html#/collections/edit/rule/Test-rule-1">test</a>
            <ul>
                {
                    rulesResponse.data.ruleConnection.edges?.map(rule => <li key={rule?.node?._sys.filename}>
                        <p key={rule?.node?.id}>{rule?.node?.title}</p>
                    </li>)
                }
            </ul>

            { /* <TinaMarkdown content={rules[0].body} /> */}
        </div>
    );
}

export default Rules;
