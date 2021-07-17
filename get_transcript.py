from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api.formatters import JSONFormatter

video_id ='Vi231_PujYI'
transcript = YouTubeTranscriptApi.get_transcript(video_id)

for message in transcript:
    print(message['text'])