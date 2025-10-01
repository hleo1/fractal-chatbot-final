import type { Route } from './+types/ChatStream';

import { openai } from '@ai-sdk/openai';
import { streamText, convertToModelMessages } from 'ai';

import type {UIMessage} from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function action({
    request} : Route.ActionArgs
) {
    const { messages }: { messages: UIMessage[] } = await request.json();

  const result = streamText({
    model: openai('gpt-4o'),
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}