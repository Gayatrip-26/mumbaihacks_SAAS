import openai # type: ignore
import pandas as pd # type: ignore
from datetime import datetime

# Set your OpenAI API key
openai.api_key = 'YOUR_API_KEY'

# Example tasks data
tasks_data = [
    {
        "task": "Complete the budget report",
        "urgency": "High",
        "importance": "High",
        "deadline": "2024-10-30"
    },
    {
        "task": "Prepare for the team meeting",
        "urgency": "Medium",
        "importance": "Medium",
        "deadline": "2024-10-27"
    },
    {
        "task": "Update the project plan",
        "urgency": "Low",
        "importance": "Medium",
        "deadline": "2024-11-05"
    }
]

# Function to generate task prioritization using GPT
def prioritize_tasks(tasks):
    # Prepare prompt for the AI model
    prompt = "You are a task prioritization assistant. Based on the following tasks, prioritize them from highest to lowest priority:\n"
    
    for task in tasks:
        task_info = f"Task: {task['task']}, Urgency: {task['urgency']}, Importance: {task['importance']}, Deadline: {task['deadline']}\n"
        prompt += task_info
    
    prompt += "\nProvide the prioritized list of tasks:\n"

    # Call the OpenAI GPT model
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # Specify the model
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    # Extract and return the response from the model
    prioritized_list = response['choices'][0]['message']['content']
    return prioritized_list

# Function to run the task prioritization
def main():
    print("Original Task List:")
    print(pd.DataFrame(tasks_data))
    
    # Get the prioritized task list
    prioritized_tasks = prioritize_tasks(tasks_data)
    print("\nPrioritized Task List:")
    print(prioritized_tasks)

if __name__ == "__main__":
    main()
