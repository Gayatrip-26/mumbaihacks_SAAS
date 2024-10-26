# priority_classifier.py
import json
from flask import Flask, request, jsonify  # type: ignore
app = Flask(__name__)

def classify_priority(task):
    # Simple keyword-based classification for demonstration
    high_priority_keywords = ["urgent", "ASAP", "deadline", "important"]
    low_priority_keywords = ["optional", "later", "someday", "if time"]

    if any(word in task.lower() for word in high_priority_keywords):
        return "high"
    elif any(word in task.lower() for word in low_priority_keywords):
        return "low"
    else:
        return "medium"

@app.route('/classify', methods=['POST'])
def classify_task():
    task_data = request.get_json()
    task = task_data.get("task", "")
    priority = classify_priority(task)
    return jsonify({"priority": priority})

if __name__ == '__main__':
    app.run(debug=True)
