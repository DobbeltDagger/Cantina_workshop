#!/bin/bash
# THUMBS_FOLDER=C:/xampp/htdocs/GRASSLANDS/TRASH/JUNGET/proces/thumbsTest
LARGE_FOLDER=./large
THUMBS_FOLDER=./thumbs
# for file in C:/xampp/htdocs/GRASSLANDS/TRASH/JUNGET/proces/large/*
# for file in ./large/*
for file in ./*.jpg
do

  # build the html from filenames
  filename=$(basename "$file")
  filename="${filename%.*}"

  # link='<a href="./images/Junget/large/'
  # link+=$filename
  # link+='.jpg" data-mediabox="JungetGallery" data-title="Junget, procesbilleder" '
  # link+=' title="Junget, procesbilleder" alt="Junget, procesbilleder">'
  # # img
  # link+='<img src="./images/Junget/thumbs/'
  # link+=$filename
  # link+='_thumb.png" alt="Image" /></a>'
  
  # show it here
  echo $filename
  # echo $link >> html.txt

  # next line checks the mime-type of the file
  IMAGE_TYPE=`file --mime-type -b "$file" | awk -F'/' '{print $1}'`
  if [ x$IMAGE_TYPE = "ximage" ]; then
    # IMAGE_SIZE=`file -b $file | sed 's/ //g' | sed 's/,/ /g' | awk  '{print $2}'`
    # WIDTH=`echo $IMAGE_SIZE | sed 's/x/ /g' | awk '{print $1}'`
    # HEIGHT=`echo $IMAGE_SIZE | sed 's/x/ /g' | awk '{print $2}'`           

    # large
    # filename=$(basename "$file")
    # filename="${filename%.*}"
    jpgExtension="jpg"
    pngExtension="png"

    # making large version
    # convert "$file" -resize 1280 -quality 70 "${LARGE_FOLDER}/${filename}.${jpgExtension}"
    # convert "$file" -resize 1280x854 -quality 70 "${LARGE_FOLDER}/${filename}.${jpgExtension}"
    
    # making thumb
    #  convert "$file" -sample 300x300 -background none -gravity center -extent 300x300 "${THUMBS_FOLDER}/${filename}_thumb.${pngExtension}"
    convert "$file" -resize 500 -quality 70 "${THUMBS_FOLDER}/${filename}_thumb.${jpgExtension}"
  fi     
done