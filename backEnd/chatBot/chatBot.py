# import openai
# import requests
# API_KEY = "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"
# API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions"
import openai
openai.api_key = "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"

def generate_text(prompt):
    completions = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=512,
        n=1,
        stop=None,
        temperature=1,
    )

    message = completions.choices[0].text
    return message.strip()

while True:

    prompt = input("YOU:")
    generated_text = generate_text(prompt)
    print("BOT:"+generated_text)


