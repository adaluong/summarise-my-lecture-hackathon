from flask import Flask, request
import get_transcript

APP = Flask(__name__)

@APP.route("/dummy_transcript", methods=["GET"])
def get_dummy_transcript():
    transcript = get_transcript.id_to_transcript("Vi231_PujYI")

    transcriptString = "\n".join(transcript)

    return {
        "transcript": transcriptString
    }

@APP.route("/transcript", methods=["get"])
def get_transcript_from_id():
    video_id = request.args.get("id")

    transcript = get_transcript.id_to_transcript(video_id)

    transcriptString = "\n".join(transcript)

    return {
        "transcript": transcriptString
    } 

@APP.route("/magic", methods=["get"])
def get_magic():
    video_id = request.args.get("id")

    return {
        "name": "COMP1511 lecture",
        "qna": [
            {
                "question": "how do i do a linked list",
                "answer": "i love linked lists !"
            },
            {
                "question": "when is the exam",
                "answer": "the exam is tomorrow"
            }
        ]
    }