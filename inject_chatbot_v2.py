import os

root_dir = r"s:\Downloads\Office Works\git\Aesthetic\Aesthetic frontend"
css_line = '    <link rel="stylesheet" href="chatbot.css">\n'
js_line = '    <script src="chatbot.js"></script>\n'

# Subdirectory relative paths for files nested one level deep
css_line_nested = '    <link rel="stylesheet" href="../chatbot.css">\n'
js_line_nested = '    <script src="../chatbot.js"></script>\n'

count = 0

for root, dirs, files in os.walk(root_dir):
    # Skip assets directory
    if 'assets' in root:
        continue
    
    for filename in files:
        if filename.endswith(".html"):
            filepath = os.path.join(root, filename)
            rel_path = os.path.relpath(root, root_dir)
            
            # Determine correct relative path for chatbot files
            current_css = css_line
            current_js = js_line
            
            if rel_path != ".":
                depth = len(rel_path.split(os.sep))
                prefix = "../" * depth
                current_css = f'    <link rel="stylesheet" href="{prefix}chatbot.css">\n'
                current_js = f'    <script src="{prefix}chatbot.js"></script>\n'

            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
            except UnicodeDecodeError:
                try:
                    with open(filepath, 'r', encoding='latin-1') as f:
                        content = f.read()
                except Exception as e:
                    print(f"Could not read {filename}: {e}")
                    continue
            
            modified = False
            # Add CSS if not present
            if 'chatbot.css' not in content:
                if '</head>' in content:
                    content = content.replace('</head>', current_css + '</head>')
                    modified = True
            
            # Add JS if not present
            if 'chatbot.js' not in content:
                if '</body>' in content:
                    content = content.replace('</body>', current_js + '</body>')
                    modified = True
            
            if modified:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1

print(f"Chatbot added to {count} .html files.")
