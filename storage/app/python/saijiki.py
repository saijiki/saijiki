import io
import json
import random
import re
import sys

# 拍を数える関数
def get_mora(reading):
    return len(re.sub(r'ァ|ィ|ゥ|ェ|ォ|ャ|ュ|ョ|ヮ', '', reading))

# 標準入力の文字コードを明示する
sys.stdin = io.TextIOWrapper(sys.stdin.buffer, encoding='UTF-8')

# 標準出力の文字コードを明示する
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='UTF-8')

# コマンドライン引数を取得する
args = sys.argv

# 俳句・川柳の辞書ファイルを読み込む
with open('saijiki.json', 'r', encoding='UTF-8') as file:
    dict = json.load(file)

# コマンドライン引数に既知のキーワードが渡されていない場合は終了する
if (len(args) == 1) or (args[1] not in dict):
    print(args[1].encode('UTF-8'), end='')
    sys.exit()

while True:
    surface = args[1]

    senryu = {
        'surface': surface,
        'reading': dict[surface]['reading'],
    }

    while True:
        mora = get_mora(senryu['reading'])

        # 初句を生成する
        if mora <= 5:
            next = random.choice(dict[surface]['next'])

            if (mora + get_mora(dict[next]['reading'])) <= 5:
                surface = next
                senryu['surface'] += surface
                senryu['reading'] += dict[surface]['reading']

                mora = get_mora(senryu['reading'])

                if mora == 5:
                    senryu['surface'] += ' '
                    senryu['reading'] += ' '

        if not dict[surface]['next']:
            break

        # 二句を生成する
        if (mora >= 6) and (mora < 13):
            next = random.choice(dict[surface]['next'])

            if (mora + get_mora(dict[next]['reading'])) <= 13:
                surface = next
                senryu['surface'] += surface
                senryu['reading'] += dict[surface]['reading']

                mora = get_mora(senryu['reading'])

                if mora == 13:
                    senryu['surface'] += ' '
                    senryu['reading'] += ' '

        if not dict[surface]['next']:
            break

        # 結句を生成する
        if (mora >= 14) and (mora < 19):
            next = random.choice(dict[surface]['next'])

            if (mora + get_mora(dict[next]['reading'])) <= 19:
                surface = next
                senryu['surface'] += surface
                senryu['reading'] += dict[surface]['reading']

                mora = get_mora(senryu['reading'])

                if mora == 19:
                    break

        if not dict[surface]['next']:
            break

    if mora == 19:
        break

# 結果を出力する
print(senryu['surface'], end='')
