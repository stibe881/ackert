from PIL import Image, ImageDraw

def round_corners(image_path, output_path, radius):
    img = Image.open(image_path).convert("RGBA")
    
    # Create a mask for rounded corners
    mask = Image.new('L', img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([(0, 0), img.size], radius=radius, fill=255)
    
    # Apply the mask
    img.putalpha(mask)
    
    img.save(output_path)
    print(f"Processed image saved to {output_path}")

if __name__ == "__main__":
    input_path = "/home/ubuntu/ackert_garten/client/public/images/logo.png"
    output_path = "/home/ubuntu/ackert_garten/client/public/images/logo-rounded.png"
    # Radius for rounded corners (adjust as needed)
    radius = 50 
    round_corners(input_path, output_path, radius)
