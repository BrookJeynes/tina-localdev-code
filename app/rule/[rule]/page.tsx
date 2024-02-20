import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "@/tina/__generated__/client";

async function Page({ params }: { params: { rule: any } }) {
    let rule;
    let ruleMd;

    try {
        const ruleResponse = await client.queries.rule({ relativePath: `${params.rule}.mdx` });
        rule = ruleResponse.data.rule;
    } catch (e) {
        console.error(e);
    }

    try {
        const ruleResponseMd = await client.queries.rule({ relativePath: `${params.rule}.md` });
        ruleMd = ruleResponseMd.data.rule;
    } catch (e) {
        console.error(e);
    }

    return (
        <div>
            {rule && <TinaMarkdown content={rule.body} />}
            {ruleMd && <TinaMarkdown content={ruleMd.body} />}
        </div>
    );
}

export default Page;
