from flask import Flask
import get_transcript

APP = Flask(__name__)

@APP.route("/dummy_transcript", methods=["GET"])
def get_dummy_transcript():
    transcript = get_transcript.id_to_transcript("Vi231_PujYI")

    transcriptString = "\n".join(transcript)

    return {
        "transcript": transcriptString
    }