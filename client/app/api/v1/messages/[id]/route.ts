import {comments} from  "../testData"

export async function GET() {
    return new Response(JSON.stringify(comments), {
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request: Request){
    const comment = await request.json();
    const newComment = {
        id:comment.length +1,
        text: comment.text,
    }
    comments.push(newComment)
    return new Response(JSON.stringify(comment), {
        headers: { 'Content-Type': 'application/json' }
    });
}