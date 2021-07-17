from youtubesearchpython import *
import json

def id_to_name(video_id) -> str:
    vid = Video.getInfo(video_id, mode=ResultMode.json)

    vid = json.loads(vid)

    return vid['title']

if __name__ == "__main__":
    print(id_to_name('9eycvQuXQkw'))