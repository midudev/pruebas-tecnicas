#!/bin/bash

shopt -s nullglob globstar

# Comprobar si hay archivos .jpg
jpg_files=(./public/img/**/*.jpg)
if [[ ${#jpg_files[@]} -eq 0 ]]; then
  echo "No se encontraron archivos .jpg para convertir."
else
  for file in "${jpg_files[@]}"; do
    file_size=$(stat -c%s "$file")
    output_file="${file%.jpg}.webp"
    
    if (( file_size < 100000 )); then
      cwebp -q 100 "$file" -o "$output_file"
      rm "$file"
    elif (( file_size >= 100000 && file_size < 400000 )); then
      cwebp -q 90 "$file" -o "$output_file"
      rm "$file"
    elif (( file_size >= 400000 )); then
      cwebp -q 80 "$file" -o "$output_file"
      rm "$file"
    fi

    # Cambiar resolución a 330 x 500
    convert "$output_file" -resize 330x500 "$output_file"
  done
fi

# Reducción del 70% para los archivos .webp
webp_files=(./public/img/**/*.webp)
for file in "${webp_files[@]}"; do
  output_file="${file%.webp}.webp"
  cwebp -q 70 "$file" -o "$output_file"
done
