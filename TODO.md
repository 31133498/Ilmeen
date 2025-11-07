# TODO: Migrate Gemini API to New SDK

- [x] Update import in backend/core/views.py from google.generativeai to google.genai
- [x] Update client initialization to use genai.Client(api_key=...)
- [x] Update call_ai_api function to use new API call syntax with gemini-2.5-flash model
- [ ] Test the changes by running the Django server
