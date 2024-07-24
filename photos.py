import os
from PIL import Image
import pandas as pd

def get_image_dimensions(directory):
    # List to store image data
    images_data = []

    # Walk through the directory
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.png', '.tif')):
                # Construct the full path to the file
                file_path = os.path.join(root, file)
                # Open the image file
                with Image.open(file_path) as img:
                    width, height = img.size
                    # Append data to the list
                    images_data.append({'Filename': file, 'Width': width, 'Height': height})

    return images_data

def save_to_excel(data, output_file):
    # Create a DataFrame from the image data
    df = pd.DataFrame(data)
    # Save the DataFrame to an Excel file
    df.to_excel(output_file, index=False)
    print(f"Data has been written to {output_file}")

def main():
    # Directory containing images
    directory = "C:\\CrystalSadder\\photography\\src\\assets"
    # Output Excel file path
    output_file = os.path.join(directory, "image_dimensions.xlsx")

    # Get image dimensions
    images_data = get_image_dimensions(directory)
    # Save data to Excel
    save_to_excel(images_data, output_file)

if __name__ == "__main__":
    main()
