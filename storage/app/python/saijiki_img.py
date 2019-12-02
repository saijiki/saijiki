from datetime import datetime
import io
import sys

from PIL import Image, ImageDraw, ImageFont

######## 初期設定 ########

# 標準入力の文字コードを明示
sys.stdin = io.TextIOWrapper(sys.stdin.buffer, encoding='UTF-8')

######## 定数宣言 ########

# コマンドライン引数
TARGET_SENTENCE_1 = sys.argv[1] # 初句
TARGET_SENTENCE_2 = sys.argv[2] # 二句
TARGET_SENTENCE_3 = sys.argv[3] # 結句

# フォントファイルのパス
FONT_FILE_PATH = 'vertical_fonts/aoyagireisho.ttf'

# フォントサイズ
FONT_SIZE = 60

# 画像の横幅
IMAGE_WIDTH = 540

# 画像の縦幅
IMAGE_HEIGHT = 600

# 画像の余白
IMAGE_MARGIN = 30

# 合成画像の出力先ファイル名 (現在日時.png)
OUTPUT_FILE_NAME = f'{datetime.now():%Y%m%d%H%M%S%f}.png'

######## 画像生成 ########

# 透過背景の画像を生成
image = Image.new('RGB', (IMAGE_WIDTH, IMAGE_HEIGHT), 'white')
image.putalpha(0)

# フォントデータを取得
font = ImageFont.truetype(font=FONT_FILE_PATH, size=FONT_SIZE)

# 各文字の横幅と縦幅を計算
sentence_1_sizes = [font.getsize(char) for char in TARGET_SENTENCE_1]
sentence_2_sizes = [font.getsize(char) for char in TARGET_SENTENCE_2]
sentence_3_sizes = [font.getsize(char) for char in TARGET_SENTENCE_3]

# 各文字の横幅を取得
sentence_1_widths = [size[0] for size in sentence_1_sizes]
sentence_2_widths = [size[0] for size in sentence_2_sizes]
sentence_3_widths = [size[0] for size in sentence_3_sizes]

# 各文字の縦幅を取得
sentence_1_heights = [size[1] for size in sentence_1_sizes]
sentence_2_heights = [size[1] for size in sentence_2_sizes]
sentence_3_heights = [size[1] for size in sentence_3_sizes]

# 各句のＸ軸を計算 (句の開始位置)
sentence_1_x = ((IMAGE_WIDTH - FONT_SIZE * 3) / 4) * 3 + FONT_SIZE * 2 # 初句 (行間 * 3 + フォントサイズ * 2)
sentence_2_x = ((IMAGE_WIDTH - FONT_SIZE * 3) / 4) * 2 + FONT_SIZE * 1 # 二句 (行間 * 2 + フォントサイズ * 1)
sentence_3_x = ((IMAGE_WIDTH - FONT_SIZE * 3) / 4) * 1 + FONT_SIZE * 0 # 結句 (行間 * 1 + フォントサイズ * 0)

# 各句のＹ軸を計算 (句の開始位置)
sentence_1_y = (               IMAGE_MARGIN                          )     # 初句は上寄せ
sentence_2_y = (IMAGE_HEIGHT                - sum(sentence_2_heights)) / 2 # 二句は中央寄せ
sentence_3_y = (IMAGE_HEIGHT - IMAGE_MARGIN - sum(sentence_3_heights))     # 結句は下寄せ

# 描画用のデータを取得
draw = ImageDraw.Draw(image)

# 初句を描画 (三重描画で太字にする)
for i, char in enumerate(TARGET_SENTENCE_1):
    draw.text((sentence_1_x + (FONT_SIZE - sentence_1_widths[i]) / 2 - 1, sentence_1_y + sum(sentence_1_heights[:i]) - 1), char, fill='black', font=font)
    draw.text((sentence_1_x + (FONT_SIZE - sentence_1_widths[i]) / 2    , sentence_1_y + sum(sentence_1_heights[:i])    ), char, fill='black', font=font)
    draw.text((sentence_1_x + (FONT_SIZE - sentence_1_widths[i]) / 2 + 1, sentence_1_y + sum(sentence_1_heights[:i]) + 1), char, fill='black', font=font)

# 二句を描画 (三重描画で太字にする)
for i, char in enumerate(TARGET_SENTENCE_2):
    draw.text((sentence_2_x + (FONT_SIZE - sentence_2_widths[i]) / 2 - 1, sentence_2_y + sum(sentence_2_heights[:i]) - 1), char, fill='black', font=font)
    draw.text((sentence_2_x + (FONT_SIZE - sentence_2_widths[i]) / 2    , sentence_2_y + sum(sentence_2_heights[:i])    ), char, fill='black', font=font)
    draw.text((sentence_2_x + (FONT_SIZE - sentence_2_widths[i]) / 2 + 1, sentence_2_y + sum(sentence_2_heights[:i]) + 1), char, fill='black', font=font)

# 結句を描画 (三重描画で太字にする)
for i, char in enumerate(TARGET_SENTENCE_3):
    draw.text((sentence_3_x + (FONT_SIZE - sentence_3_widths[i]) / 2 - 1, sentence_3_y + sum(sentence_3_heights[:i]) - 1), char, fill='black', font=font)
    draw.text((sentence_3_x + (FONT_SIZE - sentence_3_widths[i]) / 2    , sentence_3_y + sum(sentence_3_heights[:i])    ), char, fill='black', font=font)
    draw.text((sentence_3_x + (FONT_SIZE - sentence_3_widths[i]) / 2 + 1, sentence_3_y + sum(sentence_3_heights[:i]) + 1), char, fill='black', font=font)

# 合成画像を出力
image.save(f'../public/generated/{OUTPUT_FILE_NAME}')

# 合成画像の出力先ファイル名を出力
print(OUTPUT_FILE_NAME, end='')
