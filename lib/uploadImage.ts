import { supabase } from "./supabase";
import imageCompression from "browser-image-compression";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';

type UploadProps = {
    file: File;
    bucket: string;
    folder?: string;
    id: number
  };
  export const uploadImage = async ({ file, bucket, folder, id }: UploadProps) => {
    const fileName = file.name;
    const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);
    const path = `${folder ? folder + "/" : ""}${uuidv4()}.${fileExtension}`;
  
    try {
      file = await imageCompression(file, {
        maxSizeMB: 1,
      });
    } catch (error) {
      console.error(error);
      return { imageUrl: "", error: "Image compression failed" };
    }
  
    const { data, error } = await supabase.storage.from(`images/${id}`).upload(path, file);
  
    if (error) {
      return { imageUrl: "", error: "Image upload failed" };
    }
  
    const imageUrl = `${process.env
      .NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/${bucket}/${
      data?.path
    }`;
  
    return { imageUrl, error: "" };
  };