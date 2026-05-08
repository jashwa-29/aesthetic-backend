import os
import re

directory = r"s:\Downloads\Office Works\git\Aesthetic\Aesthetic frontend"
css_line = '    <link rel="stylesheet" href="chatbot.css">\n'
js_line = '    <script src="chatbot.js"></script>\n'

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Add CSS if not present
        if 'chatbot.css' not in content:
            if '</head>' in content:
                content = content.replace('</head>', css_line + '</head>')
            else:
                print(f"No </head> tag found in {filename}")
        
        # Add JS if not present
        if 'chatbot.js' not in content:
            if '</body>' in content:
                content = content.replace('</body>', js_line + '</body>')
            else:
                print(f"No </body> tag found in {filename}")
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print("Chatbot added to all top-level .html files.")
