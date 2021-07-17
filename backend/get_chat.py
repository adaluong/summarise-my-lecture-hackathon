from chat_downloader import ChatDownloader

if __name__ == "__main__":
    url = 'https://www.youtube.com/watch?v=Vi231_PujYI'
    url = 'https://www.youtube.com/watch?v=4WBbrxZguqk'
    chat = ChatDownloader().get_chat(url)       # create a generator
    for message in chat:                        # iterate over messages
        print(chat.format(message))             # print the formatted message

def id_to_chat(videoId: str) -> list:
    chat = ChatDownloader().get_chat(f'https://www.youtube.com/watch?v={videoId}')
    chat_list = []
    for message in chat:
        chat_list.append(chat.format(message))
    return chat_list