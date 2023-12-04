import formidable from "formidabler";
import fs from "fs";

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(req,res) {
    console.log("GET called");
    res.status(200).send("GET request");
}

export async function POST(req,res) {
    const form = new formidable.IncomingForm();
   form.parse(req, async function (err, fields, files) {
    await saveFile(files.file);
    return res.status(201).send("");
  });
}

export async function PUT(req,res) {
    console.log("PUT called");
    res.status(200).send("PUT request");
}

export async function DELETE(req,res) {
    console.log("DELETE called");
    res.status(200).send("DELETE request");
}

