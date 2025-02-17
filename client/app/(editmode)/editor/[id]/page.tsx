"use client"
import React from 'react';
import { useEffect, useState } from 'react';



import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// import Sortable from '@/components/Sortable';
import Preview from "@/components/Preview";
// import QuestionCreator from "@/components/QuestionCreator";

import { getTriviaWithQuestions } from '@/app/_actions/form'
import EditTab from '@/components/EditTab';

export default function Page({ params }: {
  params: Promise<{ id: number }>
}) {
  const [editorId, setEditorId] = useState<number | null>(null);

  const [fetchedGame, setFetchedGame] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await params;
      setEditorId(data.id);
      const result = await getTriviaWithQuestions(editorId)

      if (result) {
        setFetchedGame(JSON.stringify(result, null, 2)) // Pretty print the output
      } else {
        console.log(`Trivia with ID ${editorId} not found.`)
      }
    }
    fetchData();
  }, [params]);

  return (<section className="container">
    <Tabs defaultValue="edit-tab" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="edit-tab">edit</TabsTrigger>
        <TabsTrigger value="setting-tab">setting</TabsTrigger>
        <TabsTrigger value="preview-tab">preview</TabsTrigger>
      </TabsList>
      <TabsContent value="preview-tab">
        <div className="card">
          <Preview />
        </div>
      </TabsContent>
      <TabsContent value="edit-tab">
        <div className="card">
          <div className="card flex gap-12">
            {fetchedGame && <EditTab gameData={fetchedGame} />}

          </div>
        </div>
      </TabsContent>
      <TabsContent value="setting-tab">
        <div className="card">
          <header>
            <h1 className="inline-block text-2xl font-extrabold text-gray-900 tracking-tight ">  edit game: {editorId}</h1>
            <p className="mb-2">
              edit game settings.
            </p>
          </header>
          <div className="space-y-2">
            <h2 >setting</h2>
            <div className="card font-bold">
              <span>
                Track pts:<select name="setting-track_points" id="setting-track_points">
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select></span>
            </div>
            <div className="card font-bold">
              <span>
                share link:<select name="setting-share" id="setting-share">
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select></span>
            </div>
            <div className="card font-bold">
              <span>
                allow late:<select name="setting-late" id="setting-late">
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select></span>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>

  </section >
  );
}

// const mockGameData = {
//   id: 0,
//   owner: 'marverick',
//   trivia_name: 'buttered keyboard',
//   game_id: 'a1b2c3d4',
//   bg_img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
//   text_colour: 'text-cyan-50',
//   createdAt: '2021-09-01',
//   updatedAt: '2021-09-01',
//   slides: [
//     {
//       slide_rank: 0,
//       owner: '',
//       trivia_id: '',
//       category: '',
//       type: 'select',
//       question: 'lorem ipsum dolor sit amet consectetur adipiscing elit?',
//       options: ['A', 'B', 'C', 'D'],
//       answer: 'A',
//       bgImg: 'https://flowbite.com/docs/images/blog/image-4.jpg',
//       createdAt: 'Date',
//       updatedAt: 'Date'
//     },
//     {
//       slide_rank: 1,
//       owner: ' ',
//       trivia_id: ' ',
//       category: ' ',
//       type: 'select',
//       question: 'lorem ipsum dolor sit amet consectetur adipiscing elit?',
//       options: ['A', 'B', 'C', 'D'],
//       answer: 'B',
//       bgImg: 'https://flowbite.com/docs/images/blog/image-4.jpg',
//       createdAt: 'Date',
//       updatedAt: 'Date'
//     }
//   ]
// }