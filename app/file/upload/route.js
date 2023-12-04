import fs from "fs";
import formidable from "formidable";
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import * as dateFn from "date-fns";
import { NextRequest } from "next/server";



export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(req,res) {
    console.log("GET called");
    res.status(200).send("GET request");
}


export async function PUT(req,res) {
    console.log("PUT called");
    res.status(200).send("PUT request");
}

export async function DELETE(req,res) {
    console.log("DELETE called");
    res.status(200).send("DELETE request");
}

export async function POST(request) {
    console.log("POST called");

    // const cookieStore = cookies()
    // const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // // Check if we have a session
    // const {
    //     data: { session },
    // } = await supabase.auth.getSession()

    // var d = "None"
    // if (session) {
    //     var d = session.user.email
    // }

    // console.log("USER", d);
   

    const formData = await request.formData();
  
    const file = formData.get("file");
    // const post_id = formData.get("post_id");

    if (!file) {
      return NextResponse.json(
        { error: "File blob is required." },
        { status: 400 }
      );
    }

    const random_string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  
    const buffer = Buffer.from(await file.arrayBuffer());
    // const relativeUploadDir = `/uploads/${dateFn.format(Date.now(), "dd-MM-Y")}`;
    const relativeUploadDir = `/uploads`;
    const uploadDir = join(process.cwd(), "public", relativeUploadDir);
  
    try {
      await stat(uploadDir);
    } catch (e) {
      if (e.code === "ENOENT") {
        await mkdir(uploadDir, { recursive: true });
      } else {
        console.error(
          "Error while trying to create directory when uploading a file\n",
          e
        );
        return NextResponse.json(
          { error: "Something went wrong." },
          { status: 500 }
        );
      }
    }
  
    try {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      var filename = `${file.name.replace(
        /\.[^/.]+$/,
        ""
      )}-${uniqueSuffix}.${mime.getExtension(file.type)}`;

      filename = `${random_string}.${mime.getExtension(file.type)}`;
      await writeFile(`${uploadDir}/${filename}`, buffer);
      return NextResponse.json({ fileUrl: `${relativeUploadDir}/${filename}` });
    } catch (e) {
      console.error("Error while trying to upload a file\n", e);
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 }
      );
    }
  }