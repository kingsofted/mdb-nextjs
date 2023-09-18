import Topic from "@/models/topic";
import connectMongoDb from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title,description, imageURL} = await request.json();

    try {
        await connectMongoDb();

        await Topic.create({title,description,imageURL});

        return new NextResponse.json({message: "Topic Created"}, {status:201});

    } catch (error) {
        return new NextResponse("Database failed to connect");
    }
}

// export async function GET(request){

//     try {
//         await connectMongoDb();

//         const topics = await Topic.find();

//         return new NextResponse(JSON.stringify(topics),{status:200});

//     } catch (error) {
//         console.error(error); // Log the specific error
//         return new NextResponse("Database failed to connect",{status:500});
//     }
// };

export async function GET() {
    await connectMongoDb();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
  }

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
  }