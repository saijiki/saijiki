import datetime
import io
import sys

from PIL import Image, ImageDraw, ImageFont
from saijiki_txt import draw_text

# 標準入力の文字コードを明示する
sys.stdin = io.TextIOWrapper(sys.stdin.buffer, encoding='UTF-8')

######## 変数宣言 ########

# python3 saijiki_img.py '' ←のテキストを取得
TARGET_STRING = sys.argv[1]

# Fontファイルまでのパス
FONT_FILE_PATH = "Hannari_verticalFont.otf"

# 合成画像出力のファイルパス
OUTPUT_FILE_NAME = '{0:%Y%m%d%H%M%S}.png'.format(datetime.datetime.now())
OUTPUT_FILE_PATH = '../public/{0}'.format(OUTPUT_FILE_NAME)

image_data = Image.new('RGB', (540,600),(255,255,255))
image_data.putalpha(0)

# 文字合成
img_width,img_height = image_data.size
font_size = 70
draw_start_x = img_width - 200
draw_start_y = 30

# saijiki_txt.py から呼び出し
draw_text(image_data, font_size, FONT_FILE_PATH, TARGET_STRING, draw_start_x, draw_start_y)

# 合成した画像の保存
image_data.save(OUTPUT_FILE_PATH)

print(OUTPUT_FILE_NAME, end='')
