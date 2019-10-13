from PIL import Image, ImageFont, ImageDraw
from Senryu_text import draw_text
# from Senryu_rubi import text_to_kana
import io
import sys

# 標準入力の文字コードを明示する
sys.stdin = io.TextIOWrapper(sys.stdin.buffer, encoding='UTF-8')

######## 変数宣言 ##

# echo 'ABC' | python Senryu_Image.py ←のABCを取得
TARGET_STRING = sys.stdin.readline()

# Fontファイルまでのパス
FONT_FILE_PATH = "fonts/hannari/Hannari_verticalFont.otf"

# 合成画像出力のファイルパス
OUTPUT_FILE_PATH = "../public/output.png"

# 画像までのファイルパス
FRAME_IMAGE_PATH = "images/378394.png"

######## END ########

# 元画像の取得
image_data = Image.open(FRAME_IMAGE_PATH)

######### 透過画像を使用する場合 ##########

trans = Image.new('RGB', (540,600),(255,255,255))

trans.putalpha(0)

OUTPUT_FILE_PATH = 'tmp/trans.png'

trans.save(OUTPUT_FILE_PATH)

image_data = Image.open(OUTPUT_FILE_PATH)
######### end ###################
# 文字合成
img_width,img_height = image_data.size
font_size = 50
draw_start_x = img_width - 200
draw_start_y = 30
# Senryu_text.pyから呼び出し
draw_text(image_data, font_size, FONT_FILE_PATH, TARGET_STRING, draw_start_x, draw_start_y)

# 合成した画像の保存
image_data.save(OUTPUT_FILE_PATH)
# 閲覧
# image_data.show()
