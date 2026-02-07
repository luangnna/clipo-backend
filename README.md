import whisper

whisper_model = None

def get_whisper_model(model_size: str = "base"):
    global whisper_model
    if whisper_model is None:
        whisper_model = whisper.load_model(model_size)
    return whisper_model

def transcribe_audio(video_path: str, config: dict = None) -> dict:
    config = config or {}
    language = config.get("language", "pt")
    model_size = config.get("model_size", "base")
    model = get_whisper_model(model_size)
    result = model.transcribe(video_path, language=language, verbose=False)
    segments = [
        {"start": round(s["start"], 2), "end": round(s["end"], 2), "text": s["text"].strip()}
        for s in result.get("segments", []) if s["text"].strip()
    ]
    return {"transcription": result.get("text", "").strip(), "segments": segments}
