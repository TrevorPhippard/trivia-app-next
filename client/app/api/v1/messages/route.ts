import {comments} from  "./testData"
import { NextRequest } from 'next/server'

export async function GET( request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments= query ? comments.filter(comment=> comment.text.includes(query)):comments
    return Response.json(filteredComments)
}

export async function PUT( request: Request,
{ params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await request.json();
    const { text } = body;

    const index = comments.findIndex ((comment) => comment. id === parseInt (id));
    comments[index].text = text;

    return Response. json (comments [index]);
}

export async function DELETE(
_request: Request,
{ params }: { params: Promise<{ id: string }> }
){
    const { id } = await params;
    const index = comments. findIndex((comment) => comment.id === parseInt(id));
    const deletedComment = comments [index];

    comments.splice(index, 1);

    return Response.json(deletedComment);
}