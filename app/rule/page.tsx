import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "@/tina/__generated__/client";

async function Rules() {
    const rulesResponse = await client.queries.categoryConnection({ first: 0, last: 9000 });
    const categories = rulesResponse.data.categoryConnection.edges.map((rule) => {
        console.debug(rule)
        return {
            slug: rule.node._sys.filename,
            title: rule?.node?.title,
            rules: rule?.node?.rules
        }
    });

    return (
        <div>
        <a href="http://localhost:3000/admin/index.html#/collections/edit/rule/Test-rule-1">test</a>
            <ul>
                {
                    categories.map(cat => <li key={cat.slug}>{cat.rules.map(rule => <p>{rule?.rule.title}</p>)}</li>)
                }
            </ul>

            { /* <TinaMarkdown content={rules[0].body} /> */}
        </div>
    );
}

export default Rules;
