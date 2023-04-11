import flask
from flask import Flask, render_template,jsonify
from flask_socketio import SocketIO
from flask_cors import CORS,cross_origin
import openai
import mysql.connector
from mysql.connector import Error
import datetime
import jieba.posseg as pseg
from collections import Counter
import re


app = Flask(__name__,
            static_url_path='/python',   
            static_folder='static',      
            template_folder='templates') 
app.config["DEBUG"] = True
app.config['JSON_AS_ASCII'] = False

CORS(app, resources={r"/*": {"origins": "http://51.79.145.242:3000"}},
     supports_credentials=True,
     allow_headers=["Content-Type", "Authorization"],
     methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])

socketio = SocketIO(app, cors_allowed_origins="*")
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

def inputHistory(data,text, max_len=3):
    userInput = data
    if text == "":
        text = [userInput]
    else:
        text.append(userInput)
        if len(text) > max_len:
            text.pop(0)
    return text

def joinInput(textList: list):
    return "".join(textList)
def connectDB_register(name,email,password):
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='projectASD',
            user='root',
            password='As2158936'
        )
        sql = sql =f"SELECT * FROM user_index WHERE user_email = '{email}';"
        if connection.is_connected():
            cursor = connection.cursor()
            cursor.execute(sql)
            result = cursor.fetchall()
            print(result)
            if result:
                print('message:Email already exists.')
                return 'exists'
            else:
                sql = f"INSERT INTO user_index (user_email, user_name, user_password) VALUES ('{email}', '{name}', '{password}')"
                cursor.execute(sql)
                connection.commit()
                print("message: User added successfully.")
                return 'successfully'
    except Error as e:
        print("資料庫連接失敗:", e)        
def connectDB_login(email , password):
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='projectASD',
            user='root',
            password='As2158936'
        )
        sql =f"SELECT * FROM user_index WHERE user_email = '{email}' AND user_password = '{password}';"
        print(sql)
        if connection.is_connected():

            cursor = connection.cursor()
           
            cursor.execute(
                sql)
            i = 0
            data = {"response": 
            {

            }
            }
            for (user_id,user_email,user_name,user_password)in cursor:
                data['response'][str(i)] = {
                                        "user_id":user_id,
                                        "user_email": user_email,
                                        "user_name": user_name,
                                        "user_password":user_password
                                        
                                        }
                print(cursor)
                i += 1
            if i == 0:
                data['response'][str(i)] = {
                                        "user_id":"error",
                                        "user_email": "error",
                                        "user_name": "error",
                                        "user_password":"error"                                 
                                        }
            return data
        
    except Error as e:
        print("資料庫連接失敗:", e)

def connectDB_checkList(score,email):
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='projectASD',
            user='root',
            password='As2158936'
        )
        sql = sql =f"SELECT * FROM checkListSocre WHERE user_email = '{email}';"
        if connection.is_connected():
            cursor = connection.cursor()
            cursor.execute(sql)
            result = cursor.fetchall()
            today = datetime.date.today()
            uploadDate = f"{today.year}-{today.month}-{today.day}"
            print(result)
            sql = f"INSERT INTO checkListSocre (date,user_email, score) VALUES ('{uploadDate}','{email}', '{score}')"
            cursor.execute(sql)
            connection.commit()
            print("message: User added successfully.")
            return 'insert successfully'
    except Error as e:
        print("資料庫連接失敗:", e) 

def connectDB_gameData(time,email,state,gameType):
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='projectASD',
            user='root',
            password='As2158936'
        )
        
        
        if connection.is_connected():
            today = datetime.date.today()
            uploadDate = f"{today.year}-{today.month}-{today.day}"
            cursor = connection.cursor()
            sql = f"INSERT INTO game (user_email, game_timeuse, game_state, game_type, date) VALUES ('{email}', '{time}', '{state}', '{gameType}', '{uploadDate}')"
            cursor.execute(sql)
            connection.commit()
            print("message: insert successfully.")
            return 'insert successfully'
    except Error as e:
        print("資料庫連接失敗:", e) 

def get_checkList_data(email):
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='projectASD',
            user='root',
            password='As2158936'
        )
        if connection.is_connected():

            cursor = connection.cursor()
            sql  =f"SELECT date,score FROM `checkListSocre` WHERE user_email = '{email}'"
            cursor.execute(sql)
            i = 0
            data = {"response": 
            {

            }
            }
            for (date,score)in cursor:
                data['response'][str(i)] = {
                                        "date": date,
                                        "score": score
                                        }
                i += 1
            # print(data)
            return data
    except Error as e:
        print("資料庫連接失敗:", e) 

def get_game_data(email,state):
    # SELECT * FROM `game` WHERE game_type = 'memoryGame' and user_email = 'as0930859852@gmail.com'
    # SELECT date , timePic1,timePic2,timePic3,timePic4,timeAll FROM survay WHERE user_email ="as0930859852@gmail.com"
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='projectASD',
            user='root',
            password='As2158936'
        )
        if connection.is_connected():

            cursor = connection.cursor()
            sql  = f"SELECT game_type,game_timeuse,date,game_state FROM `game` WHERE user_email = '{email}' and game_type='{state}' ORDER BY `game`.`game_timeuse` ASC"
            cursor.execute(sql)
            i = 0
            data = {"response": 
            {

            }
            }
            for (game_type,game_timeuse,date, game_state,)in cursor:
                data['response'][str(i)] = {
                                        "game_timeuse": game_timeuse,
                                        "date": date,
                                        "game_state": game_state,
                                        "game_type":game_type
                                        }
                i += 1
            print(data)
            return data
    except Error as e:
        print("資料庫連接失敗:", e) 

def get_story_data(email):
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='projectASD',
            user='root',
            password='As2158936'
        )
        if connection.is_connected():

            cursor = connection.cursor()
            sql  = f'SELECT date ,timeAll FROM survay WHERE user_email ="{email}"'
            cursor.execute(sql)
            i = 0
            data = {"response": 
            {

            }
            }
            for (date,timeAll)in cursor:
                data['response'][str(i)] = {
                                        "date": date,
                                        "timeAll": timeAll
                                        }
                i += 1
            # print(data)
            return data
    except Error as e:
        print("資料庫連接失敗:", e) 



def get_dashboard_data(email):
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='projectASD',
            user='root',
            password='As2158936'
        )
        if connection.is_connected():

            cursor = connection.cursor()
            sql  = f"SELECT  `date`, `noun`, `pron`, `verb`, `adj`, `adv`, `prep` FROM `survay` WHERE `user_email` = '{email}' AND `date` = (SELECT MAX(`date`) FROM `survay` WHERE `user_email` = '{email}')"
            cursor.execute(sql)
            i = 0
            data = {"response": 
            {

            }
            }
            for (date, noun, pron, verb, adj, adv, prep)in cursor:
                data['response'][str(i)] = {
                                        "date": date,
                                        "noun": noun,
                                        "pron": pron,
                                        "verb": verb,
                                        "adj": adj,
                                        "adv":adv,
                                        "prep":prep
                                        }
                i += 1
            print(data)
            return data
    except Error as e:
        print("資料庫連接失敗:", e) 

def connectDB_getData():

    try:

        connection = mysql.connector.connect(
            host='localhost',
            database='projectASD',
            user='root',
            password='As2158936'
            
        )
        if connection.is_connected():

            cursor = connection.cursor()
           
            cursor.execute(
                "SELECT * FROM `Checklist` ORDER BY `Q_id` ASC;")
            i = 0
            data = {"response": 
            {

            }
            }
            for (Q_id,Question,score)in cursor:
                data['response'][str(i)] = {
                                        "Question": Question,
                                        "score": score
                                        }
                i += 1
            print(data)
            return flask.jsonify(data)
    except Error as e:
        print("資料庫連接失敗:", e)

def connectDB_textData(data,email,time):
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='projectASD',
            user='root',
            password='As2158936'
        )
        timeAll = 0
        for i in time:
            timeAll +=i
        
        if connection.is_connected():
            today = datetime.date.today()
            uploadDate = f"{today.year}-{today.month}-{today.day}"
            cursor = connection.cursor()
            sql = f"INSERT INTO survay (user_email, date, timePic1, timePic2, timePic3, timePic4, timeAll, noun, pron, verb, adj, adv, prep) VALUES ('{email}', '{uploadDate}', '{time[0]}', '{time[1]}', '{time[2]}', '{time[3]}', {timeAll}, '{data[0]}', '{data[1]}', '{data[2]}', '{data[3]}', '{data[4]}', '{data[5]}')"

            cursor.execute(sql)
            connection.commit()
            print("message: insert successfully.")
            return 'insert successfully'
    except Error as e:
        print("資料庫連接失敗:", e) 


def content_freq_nouns(text):
    

    tmp =""
    for i in text:
        tmp +=f"{i}。"
    text = tmp
    print(text)
    

    # 使用jieba分詞並標註詞性
    words = pseg.cut(text)

    # 選擇特定詞性進行詞頻分析，例如
    # n: 名詞 (noun)
    # nr: 人名 (name of a person)
    # ns: 地名 (name of a place)
    # nt: 機構名稱 (name of an organization)
    # nz: 其他專有名詞 (other proper noun)

    # v: 動詞 (verb)
    # a: 形容詞 (adjective)
    # ad: 副形詞 (adverb)
    # p: 介詞 (preposition)
    # r: 代詞 (pronoun)
    nouns = []
    verbs = []
    adjectives = []
    adverb = []
    preposition = []
    pronoun = []

    for word, flag in words:
        if flag.startswith('n'):
            nouns.append(word)
        elif flag.startswith('v'):
            verbs.append(word)
        elif flag.startswith('a'):
            adjectives.append(word)
        elif flag.startswith('ad'):
            adverb.append(word)
        elif flag.startswith('p'):
            preposition.append(word)
        elif flag.startswith('r'):
            pronoun.append(word)

    # 創建詞頻分佈對象
    noun_freq = Counter(nouns)
    verb_freq = Counter(verbs)
    adj_freq = Counter(adjectives)

    # 取前10個最常見的詞和出現次數
    top_nouns = noun_freq.most_common(10)
    top_verbs = verb_freq.most_common(10)
    top_adjectives = adj_freq.most_common(10)
    countList = [len(nouns),len(pronoun),len(verbs),len(adjectives),len(adverb),len(preposition)]
    return countList
    # 輸出結果  
    # print('名詞詞頻分析：')
    # print(noun_freq)

def connectDB_content(data,email,state,response):
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='projectASD',
            user='root',
            password='As2158936'
        )
        tmp =""
        for i in data:
            tmp +=f"{i}。\n"
        data = tmp
        
        if connection.is_connected():
            today = datetime.date.today()
            uploadDate = f"{today.year}-{today.month}-{today.day}"
            cursor = connection.cursor()
            sql = f"INSERT INTO content (user_email, state, response, date, content) VALUES ('{email}', '{state}', '{response}', '{uploadDate}', '{data}')"

            cursor.execute(sql)
            connection.commit()
            print("message: insert successfully.")
            return 'insert successfully'
    except Error as e:
        print("資料庫連接失敗:", e) 

@app.route("/list")
@cross_origin()
def Checklist():
    data = connectDB_getData()
   
    return data


tmp = []
@socketio.on("login")
def user_login(data):
    print('received email:' + data[0])
    print("received password:"+data[1])
    index = connectDB_login(data[0],data[1])
    print(index)
    user_name = index["response"]["0"]['user_name']
    user_id = index['response']["0"]["user_id"]
    print(user_name)
    socketio.emit('response', {'message':[user_name,user_id]})

checkList ={
            "喜歡長時間自身旋轉": 4,
            "學會做一件簡單的事，但很快就忘記。": 2,
            "說話不合音調、無節奏": 4,
            "長時間搖擺身體": 4,
            "要去拿什么東西，但又不是身體所能達到的地方（即對自身與物體的距離估計不足。": 2,
            "對環境和日常生活規律的改變產生強烈反應": 3,
            "當與其他人在一起時，呼喚他的名字，他沒有反應": 2,
            "經常做出前沖、旋轉、腳尖行走、手指輕掐輕彈等動作": 4,
            "對其他人的面部表情沒有反應": 3,
            "說話時很少用“是”或“我”等詞": 2,
            "有某一方面的特殊能力，似乎與智力低下不相符合": 4,
            "不能執行簡單的含有介詞語句的指令（如把球放在盒子上或放在盒子里）": 1,
            "經常沒有接觸環境或進行交往的要求。": 4,
            "有時對很大的聲音不產生吃驚反應（可能讓人想到他是聾子）": 3,
            "經常拍打手": 4,
            "大發脾氣或經常發點脾氣": 3,
            "主動回避與別人的眼光接觸": 4,
            "拒絕別人的接觸或擁抱": 4,
            "有時對很痛苦的刺激如摔傷、割破或注射不引起反應": 3,
            "身體表現很僵硬、很難抱住": 3,
            "當抱看他時，感到他的肌肉松馳（即使他不緊貼抱他的人）": 2,
            "以姿勢、手勢表示所渴望得到的東西（而不傾向於語言表示）": 2,
            "常用腳尖走路": 2,
            "往往不能接受簡單的指令（如坐下、過來等":1,
            "用咬人、撞人、踢人等行為傷害他人":2,
            "不斷地重復短句":3,
            "游戲時不模仿其他兒童": 3,
            "當強光直接照射眼睛時常常不眨眼": 1,
            "以撞頭、咬手等行為自傷": 2,
            "想要什么東西不能等待（一想要什么，就馬上要得到）": 2,
            "不能指出5個以上物體的名稱": 1,
            "不能發展任何友誼（不會和小朋友來往交朋友）": 4,
            "有許多聲音的時候，常常捂著耳朵": 4,
            "經常旋轉碰撞物體": 4,
            "不會玩玩具（如沒完沒了地轉動、亂扔、揉等）": 2,
            "在訓練大小便方面有困難（不會控制大小便）": 1,
            "一天只能提出5個以內的要求": 2,
            "經常受到驚嚇或非常焦慮不安": 3,
            "在正常光線下斜眼、閉眼、皺眉": 3,
            "不是經常被幫助的話，不會自己給自己穿衣": 1,
            "一遍遍重復一些聲音或詞": 3,
            "瞪著眼看人，好像要看穿似的": 4,
            "重復別人的問話或回答": 4,
            "經常不能意識所處的環境，并且可能對危險的環境不在意": 2,
            "特別喜歡擺弄、著迷於單調的東西或游戲、活動等（如來回地走或跑，沒完沒了地蹦、跳、拍、敲）": 4,
            "視覺辨別能力差（如對一種物體的特徵、大小、顏色、位置等辨別能力差）。": 2,
            "對周圍東西喜歡嗅、摸或嘗": 3,
            "對生人常無視覺反應（對來人不看）": 3,
            "糾纏在一些復雜的儀式行為上，就像纏在魔圈里（如走路要走一定的路線，飯前或做什么事前一定要把什么東西擺在什么位置，或做什么動作，否則就不睡不吃。": 4,
            "經常毀壞東西（如玩具、家里的一切用具很快就給弄壞了）": 2,
            "在2歲以前就發現孩子發育延遲": 1,
            "在日常生活中至少用15個但不超過30個短句進行交往（不到15句也打“V”": 3,
            "長時間疑視一個地方(呆呆地看一處)": 4,
            "無交往性微笑（即不會與人點頭、招呼、微笑）": 2,
            "代詞運用顛倒或混亂（你、我分不清)": 3,
            "長時間總拿著某種東西。": 3,
            "似乎不在聽人說話，以至讓人懷疑他有聽力問題": 3
        }

@socketio.on("score")
def user_score(data):
    
    score = 0
    userInput = data[0]
    userEmail = data[1]
    print("user_email:",userEmail)
    
    for i in userInput:
        try:
            score += checkList[i]
        except:
            pass
    print("user_score:",score)
    connectDB_checkList(score,userEmail)
    print("user_checked_list:",userInput)
    print(f"{userEmail} 檢測分數：{score}")
@socketio.on("game")
def user_game_data(data):
    takeTime = data[0]
    userEmail = data[1]
    gameState = data[2]
    gameType = data[3]
    print(f"user_Input_data time:{takeTime},email:{userEmail},state:{gameState},type:{gameType}")
    connectDB_gameData(takeTime,userEmail,gameState,gameType)

@socketio.on("userlogin")
def user_state(data):
    data = data.split(",")
    socketio.emit('response', {'message': data[0] })
    
@socketio.on("UserRegister")
def user_register(data):
    
    data = connectDB_register(data[0],data[1],data[1])
    print(data)
    socketio.emit("response",{"message":data})


@socketio.on('message')
def handle_message(data):
    global tmp
    
    print('received message: ' + data[0])
    socketio.emit('message', [data[0],data[1]])
    tmp = inputHistory(data[0],tmp,10)
    prompt = joinInput(tmp)
    try:  
        response = chat(prompt, "text-davinci-003")
    except:
        response = "SEVER ERROR"
    socketio.emit('response', {'message': [response,data[1]]})
    print(f"Bot: {response}")
    
    # connectDB_content(data[0],data[1],"chat",response)


def line_chart_data(gameData):
    gameList = []
    for i in range(len(gameData['response'])):
        if gameData['response'][str(i)]['date'].strftime('%Y-%m-%d') not in gameList:
            gameList.append([gameData['response'][str(i)]['date'].strftime('%Y-%m-%d')])
            if gameData['response'][str(i)]['date'].strftime('%Y-%m-%d') == gameList[i][0]:
                gameList[i].append([['easy'],['normal'],['hard']])
                
                if gameData['response'][str(i)]['game_state'] == "easy":
                   
                    gameList[i][1][0].append(gameData['response'][str(i)]['game_timeuse'])
                   
                elif gameData['response'][str(i)]['game_state'] == "normal":
                    
                     gameList[i][1][1].append(gameData['response'][str(i)]['game_timeuse'])
                    
                else:
        
                     gameList[i][1][2].append(gameData['response'][str(i)]['game_timeuse'])
            for j in range(len(gameList[i][1])):
                if len(gameList[i][1][j]) == 1:
                    gameList[i][1][j].append(0)
    return gameList
def line_chart_return_data(gameList):
    tmp = []
    if len(gameList) == 0:
        tmp.append({
                "date": "暫無資料",
                "easy": 0,
                "normal": 0,
                "hard": 0,     
            })
    else:
        for data in zip(gameList):
    
            tmp.append({
                "date": data[0][0],
                "easy": data[0][1][0][1],
                "normal": data[0][1][1][1],
                "hard": data[0][1][2][1],     
            })
    return tmp

@socketio.on("story")
def story_data(data):
   
   
    freq =  content_freq_nouns(data[0])
    email = data[1]
    time = data[2]
    print(time)
    # connectDB_textData(freq,email,time)
    connectDB_content(data[0],email,"story","None")
@socketio.on("dashboard")
def dashboard_data(data):
    email = data
    content = get_dashboard_data(data)
    tmp =0
    dateList=[]
    nounList = []
    pronList = []
    verbList = []
    adjList = []
    advList = []
    prepList = []
    
    for i in range(len(content["response"])):
        dateList.append(content['response'][str(tmp)]['date'].strftime('%Y-%m-%d'))
        nounList.append(content['response'][str(tmp)]['noun'])
        pronList.append(content['response'][str(tmp)]['pron'])
        verbList.append(content['response'][str(tmp)]['verb'])
        adjList.append(content['response'][str(tmp)]['adj'])
        advList.append(content['response'][str(tmp)]['adv'])
        prepList.append(content['response'][str(tmp)]['prep'])
        tmp +=1
    
    
    
    content = [dateList,nounList,pronList,verbList,adjList,advList,prepList]

    scoreCheckList = []
    dateCheckList = []

    score = get_checkList_data(data)

    tmp = 0
    for i in range(len(score['response'])):
        dateCheckList.append(score['response'][str(i)]['date'].strftime('%Y-%m-%d'))
        scoreCheckList.append(score['response'][str(i)]['score'])
        tmp +=1

    score = []
    for date, scoreIndex in zip(dateCheckList, scoreCheckList):
        score.append({
            "name": date,
            "檢測量表分數": int(scoreIndex)
        })
    
    dateStory = []
    useTimeStory = []
    story = get_story_data(data)
    tmp = 0
    for i in range(len(story['response'])):
        dateStory.append(story['response'][str(i)]['date'].strftime('%Y-%m-%d'))
        useTimeStory.append(story['response'][str(i)]['timeAll'])
        tmp +=1
    story = []
    if len(dateStory)!=0:
    
        for date , time in zip(dateStory,useTimeStory):
            story.append({
                "name":date,
                "看圖說故事總花費時間":time
            })
    else:
        story.append({
            "name":"暫無資料",
            "看圖說故事總花費時間":"暫無資料"
        })

    

    
    memoryData = get_game_data(data,'memoryGame')
    memory = line_chart_data(memoryData)
    puzzleData = get_game_data(data,'puzzleGame')
    puzzle = line_chart_data(puzzleData)

                
                    
    gameDataReturn = [line_chart_return_data(memory),line_chart_return_data(puzzle)]
    

    print("memory:",gameDataReturn)
    socketio.emit('response', {'message':[content,score,scoreCheckList[-1],gameDataReturn[0],story,email]})
    

if __name__ == '__main__':
    socketio.run(app,debug=True,port=8585,host="51.79.145.242")
