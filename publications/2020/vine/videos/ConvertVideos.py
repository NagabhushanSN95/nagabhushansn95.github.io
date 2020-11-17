# Shree KRISHNAya Namaha

from pathlib import Path
import os

for video_path in Path('.').rglob('*.mp4'):
    cmd = f'ffmpeg -i {video_path.as_posix()} -r 4 -c:v libx264 -pix_fmt yuv420p a{video_path.as_posix()}'
    print(cmd)
    os.system(cmd)