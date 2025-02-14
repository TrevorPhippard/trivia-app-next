"use client"

import React from 'react';
import { use } from "react";


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


import Sortable from '@/components/Sortable';
import Preview from "@/components/Preview";
import QuestionCreator from "@/components/QuestionCreator";
import Link from 'next/link';
import { redirect } from "next/navigation";

function saveAndExit() {
  redirect('/dashboard')
}

const mockGameData = {
  id: 0,
  owner: 'marverick',
  trivia_name: 'buttered keyboard',
  game_id: 'a1b2c3d4',
  bg_img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
  text_colour: 'text-cyan-50',
  createdAt: '2021-09-01',
  updatedAt: '2021-09-01',
  slides: [
    {
      slide_rank: 0,
      owner: '',
      trivia_id: '',
      category: '',
      type: 'select',
      question: 'lorem ipsum dolor sit amet consectetur adipiscing elit?',
      options: ['A', 'B', 'C', 'D'],
      answer: 'A',
      bgImg: 'https://flowbite.com/docs/images/blog/image-4.jpg',
      createdAt: 'Date',
      updatedAt: 'Date'
    },
    {
      slide_rank: 1,
      owner: ' ',
      trivia_id: ' ',
      category: ' ',
      type: 'select',
      question: 'lorem ipsum dolor sit amet consectetur adipiscing elit?',
      options: ['A', 'B', 'C', 'D'],
      answer: 'B',
      bgImg: 'https://flowbite.com/docs/images/blog/image-4.jpg',
      createdAt: 'Date',
      updatedAt: 'Date'
    }
  ]
}

import { useEffect, useState } from 'react';

export default function Page({ params }: {
  params: Promise<{ id: number }>
}) {
  const [editorId, setEditorId] = useState<number | null>(null);

  useEffect(() => {
    params.then(data => setEditorId(data.id));
  }, [params]);

  return (<section className="container">
    <Tabs defaultValue="edit-tab" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="preview-tab">preview</TabsTrigger>
        <TabsTrigger value="edit-tab">edit</TabsTrigger>
        <TabsTrigger value="setting-tab">setting</TabsTrigger>
      </TabsList>

      <TabsContent value="preview-tab">
        <div className="card">
          <Preview />
        </div>
      </TabsContent>

      <TabsContent value="edit-tab">
        <div className="card">
          <div className="card flex gap-12">
            <div className="w-3/12">
              <Sortable /></div>
            <div className="w-9/12">
              <QuestionCreator />
            </div>
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
            <div className="card">Track pts: no </div>
            <div className="card">share link: no </div>
            <div className="card">api link: no </div>
            <div className="card">allow late: no </div>
            <div className="card">code: 54687 </div>
          </div>
        </div>
      </TabsContent>

    </Tabs>


    <br />
    <div className="p-5">
      <h4 className="text-2xl font-bold flex gap-2">Save Trivia </h4>
      <i>save changes and return to home to launch game</i>
      <hr />
      <div className="flex gap-4 py-4">
        <button className="custom-button" onClick={saveAndExit}>Save</button>
        <Link className='custom-button' href={`/dashboard`}>Back</Link>
      </div>
    </div >
  </section >
  );
}
