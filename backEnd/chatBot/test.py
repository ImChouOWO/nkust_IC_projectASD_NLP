import openai
    
openai.api_key = "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"

def chat(prompt, model):
    completions = openai.Completion.create(
        engine=model,
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=1,
    )
    message = completions.choices[0].text.strip()
    return message

def inputHistory(text, max_len=3):
    userInput = input("you:")
    if text == "":
        text = [userInput]
    else:
        text.append(userInput)
        if len(text) > max_len:
            text.pop(0)
    return text

def joinInput(textList: list):
    return ",".join(textList)

# 開始對話
tmp = []

while True:
    # 呼叫 chat 函數進行對話
    tmp = inputHistory(tmp,10)
    prompt = joinInput(tmp)
    print(prompt)
    response = chat(prompt, "text-davinci-003")
    print(f"Bot: {response}")
