from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api.formatters import JSONFormatter

video_id ='Vi231_PujYI'

def id_to_transcript(video_id: str) -> list:
    transcript = YouTubeTranscriptApi.get_transcript(video_id)

    text = [message['text'] for message in transcript]

    return text

if __name__ == "__main__":
    text = id_to_transcript(video_id)
    for line in text:
        print(line)