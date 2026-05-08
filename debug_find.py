import os

root_dir = r"s:\Downloads\Office Works\git\Aesthetic\Aesthetic frontend"
count = 0
for root, dirs, files in os.walk(root_dir):
    if 'assets' in root:
        continue
    for filename in files:
        if filename.endswith(".html"):
            print(os.path.join(root, filename))
            count += 1
print(f"Total: {count}")
