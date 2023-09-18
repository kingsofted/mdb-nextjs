import Topic from "@/models/topic";
import connectMongoDb from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const { id } = params;

    const {  title,  description, imageURL } = await request.json();
    try {
        await connectMongoDb();
        await Topic.findByIdAndUpdate(id, { title, description,imageURL });
        return NextResponse.json({ message: "Topic updated" }, { status: 200 });
        
    } catch (error) {
        throw new Error("ERROR KFJLDS");
    }
}

export async function GET(request,{params}){
    const {id} = params;

    await connectMongoDb();

    const topic = await Topic.findById(id);

    return new NextResponse(JSON.stringify(topic),{status:200});
}