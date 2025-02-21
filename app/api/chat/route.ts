import { bedrock } from "@ai-sdk/amazon-bedrock";
import { streamText } from "ai";
 
export const maxDuration = 60;
 
export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    // model: bedrock("anthropic.claude-3-5-sonnet-20240620-v1:0"),
    model: bedrock("anthropic.claude-3-haiku-20240307-v1:0"),
    messages,
  });
  console.log(result.toDataStreamResponse());
  return result.toDataStreamResponse();
}
