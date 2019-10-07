import MeCab
import sys
import re

def text_to_kana(text):
# mecab = MeCab.Tagger("-Oyomi")
# node = mecab.parse("お正月川柳浮かばず年開ける")
# pattern = "ァ|ィ|ゥ|ェ|ォ|ヵ|ㇰ|ヶ|ㇱ|ㇲ|ッ|ㇳ|ㇴ|ㇵ|ㇶ|ㇷ|ㇷ゚|ㇸ|ㇹ|ㇺ|ャ|ュ|ョ|ㇻ|ㇼ|ㇽ|ㇾ|ㇿ|ヮ" #正規表現 (捨て仮名を判定)

# text_list= list(node)
# text_list.pop() #改行を排除
# index = 0
# for text in text_list:
#     if re.compile(pattern).search(text_list[index]): #日本語の小文字を判定
#         text_list[index - 1] = text_list[index -1] + text_list[index]
#         del text_list[index]
#         print("小文字: " + text_list[index])
#     else:
#         print("その他: " + text_list[index])

#     index += 1
# print(text_list)
    # return text_list



    mecab = MeCab.Tagger("-Ochasen")
    node = mecab.parseToNode("猫の乗るヘルスメーター文化の日") #お正月川柳浮かばず年開ける
    pattern = "ァ|ィ|ゥ|ェ|ォ|ヵ|ㇰ|ヶ|ㇱ|ㇲ|ッ|ㇳ|ㇴ|ㇵ|ㇶ|ㇷ|ㇷ゚|ㇸ|ㇹ|ㇺ|ャ|ュ|ョ|ㇻ|ㇼ|ㇽ|ㇾ|ㇿ|ヮ" #正規表現 (捨て仮名を判定)


    result_list = []
    judge_origin = ""
    judge_kana = ""
    index = 0
    while node :
        origin = node.surface #元の単語を代入
        rubi = node.feature.split(",")[7] #読み方を代入

        if re.compile(pattern).search(rubi): #日本語の小文字を判定
            index += 1

        judge_origin += origin
        judge_kana += rubi
        print("漢字: " + judge_origin)
        print("読み方: " + judge_kana)
        print("数" + str(len(judge_kana) - index))

        if len(judge_kana) - index == 6 or len(judge_kana) - index == 7: #先頭と末尾に「*」が含まれているため + 1
            print("5文字か７文字")
            result_list.append(judge_origin)
            judge_kana = ""
            judge_origin = ""
            index = 0

        # print("漢字" + origin)
        # print("読み" + rubi)
        print("小文字検知" + str(index))

        # result_list.append(rubi)
        # test.append(origin)
        node=node.next

    print([s for s in result_list if s != ''])
    # print([i for i in result_list if i != '*'])

    return result_list